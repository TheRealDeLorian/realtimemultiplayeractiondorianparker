using System.Net.WebSockets;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors();

var app = builder.Build();
app.UseCors(p =>
    p.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()
);
app.UseWebSockets();


app.UseHttpsRedirection();


List<WebSocket> webSockets = new();
app.Use(async (context, next) =>
{
    if (context.Request.Path == "/ws")
    {
        if (context.WebSockets.IsWebSocketRequest)
        {
            using var webSocket = await context.WebSockets.AcceptWebSocketAsync();
            webSockets.Add(webSocket);
            Console.WriteLine("connection created");
            await Echo(webSocket);
            webSockets.Remove(webSocket);
            Console.WriteLine("connection closed");
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

app.Run();

async Task Echo(WebSocket webSocket)
{
    var buffer = new byte[1024 * 4];

    var receiveResult = await webSocket.ReceiveAsync(
        new ArraySegment<byte>(buffer), CancellationToken.None);

    while (!receiveResult.CloseStatus.HasValue)
    {
        string bufferAsString = Encoding.ASCII.GetString(buffer);
        Console.WriteLine(bufferAsString);
        foreach (WebSocket ws in webSockets)
        {
            if (ws.State == WebSocketState.Closed)
                continue;
            await ws.SendAsync(
                new ArraySegment<byte>(buffer, 0, receiveResult.Count),
                receiveResult.MessageType,
                receiveResult.EndOfMessage,
                CancellationToken.None);

        }
        receiveResult = await webSocket.ReceiveAsync(
            new ArraySegment<byte>(buffer), CancellationToken.None);
    }

    await webSocket.CloseAsync(
        receiveResult.CloseStatus.Value,
        receiveResult.CloseStatusDescription,
        CancellationToken.None);
}



