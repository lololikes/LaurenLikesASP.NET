using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FirstEmpty.Models
{
    public class GradeCalcModel
    {
        [Range(0, 100, ErrorMessage ="Enter a number between 0 and 100")]
        public float assignmentGrade { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100")]
        public float quizzesGrade { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100")]
        public float groupGrade { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100")]
        public float intexGrade { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100")]
        public float examsGrade { get; set; }

    }
}
