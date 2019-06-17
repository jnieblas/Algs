import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class SequenceTest {

    private Sequence s;

    @Before
    public void setUp(){
        s = new Sequence();
    }

    // Even spaces tests
    @Test
    public void testReturnBestXEven(){
        String x = "TAAGGTCA";
        String y = "AACAGTTACC";
        String bestX = "TA_AGGT_CA";
        s.startSequence(x, y);
        assertEquals(s.getBestX(), bestX);
    }

    @Test
    public void testReturnBestYEven(){
        String x = "TAAGGTCA";
        String y = "AACAGTTACC";
        String bestY = "AACAGTTACC";
        s.startSequence(x, y);
        assertEquals(s.getBestY(), bestY);
    }

    // Odd spaces tests
    @Test
    public void testReturnBestXOdd(){
        String x1 = "AACGTAGAC";
        String y1 = "GACATATTAC";
        String bestX1 = "AACGTAG_AC";
        s.startSequence(x1, y1);

        assertEquals(s.getBestX(), bestX1);
    }

    @Test
    public void testReturnBestYOdd(){
        String x1 = "AACGTAGAC";
        String y1 = "GACATATTAC";
        String bestY1 = "GACATATTAC";
        s.startSequence(x1, y1);

        assertEquals(s.getBestY(), bestY1);
    }

    // Test large string vs. small string
    @Test
    public void testReturnBestXSL(){
        String x2 = "GATTATAC";
        String y2 = "TATAT";
        String bestX2 = "GATTATAC";
        s.startSequence(x2, y2);

        assertEquals(s.getBestX(), bestX2);
    }

    @Test
    public void testReturnBestYSL(){
        String x2 = "GATTATAC";
        String y2 = "TATAT";
        String bestY2 = "TAT_AT__";
        s.startSequence(x2, y2);

        assertEquals(s.getBestY(), bestY2);
    }
}