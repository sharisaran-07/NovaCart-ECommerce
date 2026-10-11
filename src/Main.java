import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        OrderManager manager = new OrderManager();

        while (true) {
            System.out.println("\n=== E-COMMERCE ORDER MANAGEMENT ===");
            System.out.println("1. Add Order");
            System.out.println("2. View Orders");
            System.out.println("3. Update Order Status");
            System.out.println("4. Cancel Order");
            System.out.println("5. Search Orders");
            System.out.println("6. Exit");
            System.out.print("Enter choice: ");

            int choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {
            case 1:
                System.out.print("Customer name: ");
                String customer = sc.nextLine();

                System.out.print("Product name: ");
                String product = sc.nextLine();

                System.out.print("Quantity: ");
                int quantity = sc.nextInt();

                System.out.print("Price per item: ");
                double price = sc.nextDouble();
                sc.nextLine();

                Order order = new Order(
                    customer, product, quantity, price
                );

                manager.addOrder(order);
                break;

            case 2:
                manager.displayOrders();
                break;

            case 3:
                System.out.print("Enter Order ID: ");
                int updateId = sc.nextInt();
                sc.nextLine();

                System.out.print("Enter new status: ");
                String status = sc.nextLine();

                manager.updateOrderStatus(updateId, status);
                break;

            case 4:
                System.out.print("Enter Order ID to cancel: ");
                int cancelId = sc.nextInt();
                sc.nextLine();

                manager.cancelOrder(cancelId);
                break;

            case 5:
                System.out.print("Enter customer or product name: ");
                String keyword = sc.nextLine();

                manager.searchOrders(keyword);
                break;

            case 6:
                System.out.println("Thank you!");
                sc.close();
                return;

            default:
                System.out.println("Invalid choice.");
        }
        }
    }
}