using System.ComponentModel.DataAnnotations;

namespace Mission_4_Brandon_Griffiths.Models
{
    public class GradeCalculatorModel
    {
        //Determines if range is inbetween 0 and 100
        [Range(0, 100)]
        public int Assignments { get; set; }

        [Range(0, 100)]
        public int Quizzes { get; set; }

        [Range(0, 100)]
        public int Projects { get; set; }

        [Range(0, 100)]
        public int INTEX { get; set; }

        [Range(0, 100)]
        public int Final { get; set; }

        [Range(0, 100)]
        public int Midterm { get; set; }
    }
}
