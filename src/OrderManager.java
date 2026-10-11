import java.sql.*;
import java.util.LinkedList;

public class OrderManager {

    private LinkedList<Order> orders = new LinkedList<>();

    public void addOrder(Order order) {
        String sql = "INSERT INTO orders " +
            "(customer_name, product_name, quantity, price, status) " +
            "VALUES (?, ?, ?, ?, ?)";

        try (Connection con = DBConnection.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {

            ps.setString(1, order.getCustomerName());
            ps.setString(2, order.getProductName());
            ps.setInt(3, order.getQuantity());
            ps.setDouble(4, order.getPrice());
            ps.setString(5, order.getStatus());

            ps.executeUpdate();
            System.out.println("Order saved to MySQL successfully!");

        } catch (SQLException e) {
            System.out.println("Could not save order: " + e.getMessage());
        }
    }

    public void displayOrders() {
        String sql = "SELECT * FROM orders ORDER BY order_id";

        try (Connection con = DBConnection.getConnection();
             Statement st = con.createStatement();
             ResultSet rs = st.executeQuery(sql)) {

            if (!rs.isBeforeFirst()) {
                System.out.println("No orders available.");
                return;
            }

            while (rs.next()) {
                System.out.println(
                    "Order ID: " + rs.getInt("order_id") +
                    " | Customer: " + rs.getString("customer_name") +
                    " | Product: " + rs.getString("product_name") +
                    " | Quantity: " + rs.getInt("quantity") +
                    " | Total: Rs. " +
                    rs.getBigDecimal("price").multiply(
                        java.math.BigDecimal.valueOf(rs.getInt("quantity"))
                    ) +
                    " | Status: " + rs.getString("status")
                );
            }

        } catch (SQLException e) {
            System.out.println("Could not retrieve orders: " + e.getMessage());
        }
    }

    public LinkedList<Order> getOrders() {
        return orders;
    }
public void updateOrderStatus(int orderId, String status) {
    String sql = "UPDATE orders SET status = ? WHERE order_id = ?";

    try (Connection con = DBConnection.getConnection();
         PreparedStatement ps = con.prepareStatement(sql)) {

        ps.setString(1, status);
        ps.setInt(2, orderId);

        int rows = ps.executeUpdate();

        if (rows > 0) {
            System.out.println("Order status updated successfully!");
        } else {
            System.out.println("Order ID not found.");
        }

    } catch (SQLException e) {
        System.out.println("Error: " + e.getMessage());
    }
}
public void cancelOrder(int orderId) {
    String sql = "UPDATE orders SET status = 'Cancelled' WHERE order_id = ?";

    try (Connection con = DBConnection.getConnection();
         PreparedStatement ps = con.prepareStatement(sql)) {

        ps.setInt(1, orderId);
        int rows = ps.executeUpdate();

        if (rows > 0) {
            System.out.println("Order cancelled successfully!");
        } else {
            System.out.println("Order ID not found.");
        }

    } catch (SQLException e) {
        System.out.println("Error: " + e.getMessage());
    }
}
public void searchOrders(String keyword) {
    String sql = "SELECT * FROM orders WHERE " +
        "CAST(order_id AS CHAR) LIKE ? OR " +
        "customer_name LIKE ? OR product_name LIKE ?";

    try (Connection con = DBConnection.getConnection();
         PreparedStatement ps = con.prepareStatement(sql)) {

        String search = "%" + keyword + "%";
        ps.setString(1, search);
        ps.setString(2, search);
        ps.setString(3, search);

        ResultSet rs = ps.executeQuery();

        boolean found = false;

        while (rs.next()) {
            found = true;
            System.out.println(
                "Order ID: " + rs.getInt("order_id") +
                " | Customer: " + rs.getString("customer_name") +
                " | Product: " + rs.getString("product_name") +
                " | Quantity: " + rs.getInt("quantity") +
                " | Price: Rs. " + rs.getBigDecimal("price") +
                " | Status: " + rs.getString("status")
            );
        }

        if (!found) {
            System.out.println("No matching orders found.");
        }

        rs.close();

    } catch (SQLException e) {
        System.out.println("Search error: " + e.getMessage());
    }
}
}
