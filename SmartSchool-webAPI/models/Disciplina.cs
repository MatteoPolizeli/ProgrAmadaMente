namespace SmartSchool_webAPI.models
{
    public class disciplina
    {
        public int id { get; set; }

        public string Nome { get; set; }

        public int ProfessorId { get; set; }

        public Professor Professor { get; set; }

        
    }
}
