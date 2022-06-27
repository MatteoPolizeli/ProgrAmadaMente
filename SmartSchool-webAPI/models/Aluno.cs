namespace SmartSchool_webAPI.Models
{
    public class Aluno
    {
        public Aluno()
        {
        }

        public Aluno(int id, string nome, string sobrenome, int telefone)
        {
            this.Id = id;
            this.Nome = nome;
            this.Sobrenome = sobrenome;
            this.Telefone = telefone;
        }

        public int Id { get; set; }

        public string Nome { get; set; }

        public string Sobrenome { get; set; }

        public int Telefone { get; set; }
    }
}
