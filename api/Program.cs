using System.Collections.Concurrent;
using System.Net.WebSockets;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors();

var app = builder.Build();

app.UseCors(p =>
    p.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()
);

var activeDisplaySockets = new ConcurrentBag<WebSocket>();
var activeMovementSockets = new ConcurrentBag<WebSocket>();
var activeRegistrationSockets = new ConcurrentBag<WebSocket>();


app.UseWebSockets();



app.Use(async (context, next) =>
{
    if (context.Request.Path == "/ws/register")
    {
        if (context.WebSockets.IsWebSocketRequest)
        {
            using var webSocket = await context.WebSockets.AcceptWebSocketAsync();
            activeRegistrationSockets.Add(webSocket);
            Console.WriteLine("Connection Created");

            try
            {
                await Echo(webSocket, activeRegistrationSockets);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"WebSocket Error: {ex.Message}");
            }
            finally
            {
                activeRegistrationSockets.TryTake(out var _);
                Console.WriteLine("Connection Closed");
            }

        }
        else
        {
            context.Response.StatusCode = StatusCodes.Status400BadRequest;
        }
    }
    else
    {
        await next(context);
    }
});

app.UseHttpsRedirection();

app.Run();

static async Task Echo(WebSocket webSocket, ConcurrentBag<WebSocket> activeDisplaySockets)
{
    var buffer = new byte[1024 * 4];

    while (webSocket.State == WebSocketState.Open)
    {
        var receiveResult = await webSocket.ReceiveAsync(
            new ArraySegment<byte>(buffer), CancellationToken.None);


        if (receiveResult.CloseStatus.HasValue)
        {
            Console.WriteLine("Recieved Close Status");
            break;
        }

        string message = Encoding.UTF8.GetString(buffer, 0, receiveResult.Count);
        Console.WriteLine($"Received from frontend: `{message}`");

        var tasks = activeDisplaySockets.Where(s => s.State == WebSocketState.Open)
                            .Select(async socket =>
                            {
                                await socket.SendAsync(
                                    new ArraySegment<byte>(Encoding.ASCII.GetBytes(message)),
                                    WebSocketMessageType.Text,
                                    true,
                                    CancellationToken.None);
                            });

        await Task.WhenAll(tasks);
    }

    await webSocket.CloseAsync(
        WebSocketCloseStatus.NormalClosure,
        "Connection closed by client",
        CancellationToken.None);
}