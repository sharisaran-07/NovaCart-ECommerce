import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;
import java.io.*;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

public class WebServer {

    public static void main(String[] args) throws IOException {

        HttpServer server = HttpServer.create(
                new InetSocketAddress(8080), 0);

        server.createContext("/", exchange -> {
            String requestPath = exchange.getRequestURI().getPath();

            if (requestPath.equals("/")) {
                requestPath = "/index.html";
            }

            Path file = Path.of("web" + requestPath).normalize();
            Path webFolder = Path.of("web").toAbsolutePath().normalize();
            file = file.toAbsolutePath().normalize();

            if (!file.startsWith(webFolder) || !Files.isRegularFile(file)) {
                sendResponse(exchange, 404, "File not found");
                return;
            }

            String contentType = "text/plain; charset=UTF-8";

            if (requestPath.endsWith(".html")) {
                contentType = "text/html; charset=UTF-8";
            } else if (requestPath.endsWith(".css")) {
                contentType = "text/css; charset=UTF-8";
            } else if (requestPath.endsWith(".js")) {
                contentType = "application/javascript; charset=UTF-8";
            } else if (requestPath.endsWith(".png")) {
                contentType = "image/png";
            } else if (requestPath.endsWith(".jpg")
                    || requestPath.endsWith(".jpeg")) {
                contentType = "image/jpeg";
            } else if (requestPath.endsWith(".webp")) {
                contentType = "image/webp";
            }

            byte[] data = Files.readAllBytes(file);
            exchange.getResponseHeaders().set("Content-Type", contentType);
            exchange.getResponseHeaders().set("X-Content-Type-Options", "nosniff");
            exchange.sendResponseHeaders(200, data.length);

            try (OutputStream output = exchange.getResponseBody()) {
                output.write(data);
            }
        });

        server.start();

        System.out.println("NovaCart server started!");
        System.out.println("Open: http://localhost:8080");
    }

    private static void sendResponse(
            HttpExchange exchange, int status, String message)
            throws IOException {

        byte[] data = message.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set(
                "Content-Type", "text/plain; charset=UTF-8");
        exchange.sendResponseHeaders(status, data.length);

        try (OutputStream output = exchange.getResponseBody()) {
            output.write(data);
        }
    }
}