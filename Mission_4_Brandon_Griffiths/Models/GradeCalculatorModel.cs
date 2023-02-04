using System.ComponentModel.DataAnnotations;

namespace Mission_4_Brandon_Griffiths.Models
{
    public class GradeCalculatorModel
    {
        //Determines if range is inbetween 0 and 100
        [Range(0, 100)]
        public int Assignments { get; set; }

        public int Quizzes { get; set; }

        public int Projects { get; set; }

        public int INTEX { get; set; }

        public int Final { get; set; }

        public int Midterm { get; set; }
    }
}
