import java.util.*;

class Solution {
    // Function to sort elements of an array by frequency
    public int[] sortByFrequency(int[] arr) {
        // Map to store frequency of each number
        Map<Integer, Integer> freq = new HashMap<>();

        // Count frequency of each element
        for (int num : arr) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }

        // Convert array to list for sorting
        List<Integer> list = new ArrayList<>();
        for (int num : arr) list.add(num);

        // Sort using custom comparator
        Collections.sort(list, (a, b) -> {
            if (!freq.get(a).equals(freq.get(b))) return freq.get(b) - freq.get(a);
            return a - b;
        });

        // Convert list back to array
        for (int i = 0; i < arr.length; i++) {
            arr[i] = list.get(i);
        }

        return arr;
    }
}

// Driver code
class SortByFrequency {
    public static void main(String[] args) {
        Solution obj = new Solution();

        int[] arr = {1, 2, 3, 2, 4, 3, 1, 2};
        int[] res = obj.sortByFrequency(arr);

        for (int num : res) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
