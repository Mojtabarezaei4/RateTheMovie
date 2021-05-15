using RateTheMovie.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace RateTheMovie.Services
{
    // DataBase Design Pattern
    public class UsersDAO
    {
        string connectionString = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=Users;Integrated Security=True;
            Connect Timeout=30;
            Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"; 

        // Searching for a user
        public bool FindUserByEmailAndPassword(UserModel user)
        {
            bool success = false;

            string sqlSetatement = "SELECT * FROM dbo.Users WHERE useremail = @useremail  AND password = @password";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(sqlSetatement, connection);

                // Define parameters in 22 which is prepared statement
                command.Parameters.Add("@useremail", System.Data.SqlDbType.VarChar, 50).Value = user.UserEmail;
                command.Parameters.Add("@password", System.Data.SqlDbType.VarChar, 50).Value = user.Password;

                try
                {
                    // Initiate a connenction to the db.
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();

                    if (reader.HasRows)
                    {
                        success = true;
                    }
                }
                catch(Exception e)
                {
                    Console.WriteLine(e.Message);
                }

            }

            // return true if found the user in db.
            return success;

        }
    }
}
