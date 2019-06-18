import java.util.HashMap;

public class Driver {
    public static void main(String[] args){
      int capacity = Integer.parseInt(args[0]);
      int items = Integer.parseInt(args[1]);
      HashMap<Integer, Item> itemList = new HashMap<>();

      int i = 2;
      int count = 1;
      while(i < args.length){
        int profit = Integer.parseInt(args[i]);
        int weight = Integer.parseInt(args[i + 1]);
        itemList.put(count, new Item(profit, weight));
        i += 2;
        count++;
      }

      Algorithm a1 = new Algorithm(itemList, capacity, items);
      a1.findBestNode();

      System.out.println("\nBest node: " + a1.getBest().toString());
    }
}
