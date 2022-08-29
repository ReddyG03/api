import java.util.Scanner;
class Sum{
    public static void main(String[] args) {
        int x,y,sum;
        Scanner obj = new Scanner(System.in);
        System.out.println("Typer a Number:");
        x = obj.nextInt();


        System.out.println("Type another no:");
        y = obj.nextInt();

        sum = x*y;
        System.out.println("Sum is:" + sum);
    }
}