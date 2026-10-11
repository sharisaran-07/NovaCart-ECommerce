public class Order {
    private int orderId;
    private String customerName;
    private String productName;
    private int quantity;
    private double price;
    private String status;

    public Order(String customerName, String productName,
                 int quantity, double price) {
        this.customerName = customerName;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
        this.status = "Placed";
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public String getProductName() {
        return productName;
    }

    public int getQuantity() {
        return quantity;
    }

    public double getPrice() {
        return price;
    }

    public String getStatus() {
        return status;
    }

    public double getTotal() {
        return quantity * price;
    }
}