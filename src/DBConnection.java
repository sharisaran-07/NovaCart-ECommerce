import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {

    private static final String URL =
        "jdbc:mysql://localhost:3306/ecommerce_db";
    private static final String USER = "root";

    // Replace with your actual MySQL root password
    private static final String PASSWORD = System.getenv("DB_PASSWORD");

    public static Connection getConnection()
            throws SQLException {
        return DriverManager.getConnection(
            URL, USER, PASSWORD
        );
    }

    public static void main(String[] args) {
        try (Connection con = getConnection()) {
            System.out.println(
                "Connected to MySQL successfully!"
            );
        } catch (SQLException e) {
            System.out.println(
                "Connection failed: " + e.getMessage()
            );
        }
    }
}