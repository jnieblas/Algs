/*
 * Holds relevant information to each score within the chart.
 * Score consists of:
 * points = total number of points leading to this score
 * choice = choice made leading to this score,
 *          where choice can =:
 *          n = no space was added here
 *          x = space was added to string x
 *          y = space was added to string y
 */
public class Score {
    private int points;
    private char choice;

    public Score(int p, char c){
      this.points = p;
      this.choice = c;
    }

    public int getPoints(){
      return this.points;
    }

    public char getChoice(){
      return this.choice;
    }
}
