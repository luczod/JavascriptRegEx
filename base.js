const texto = `
John brought flowers to his beloved girlfriend on January 10, 1970,
Mary was her name.


It was an excellent year in John's life. He had 5 children, all of whom are now adults.
Mary, today his wife, still makes that coffee and cheese bread on weekday afternoons.
Sunday. Also right! Being the good girl from Minas Gerais that she is, she never forgets her famous
cheese bread.
I never tire of listening to Mary:
"Jooooooooohnnnnnnnnnn   , The coffee is ready here. Comeeeees"!
`;

const arquivos = [
  "Atenção.jpg",
  "FOTO.jpeg",
  "Kitty.jpg",
  "Kitty.JPG",
  "Kitty.JPEG",
  "Kitty.JPeeEEEEeeeeeeeeeeeeeeeeeeeeeeeeEEEEEEEEEEG",
  "Wife.png",
  "Shopping list.txt",
];

const cpfs = `
Os CPFs são:
  254.224.877-45 215.978.456-12 047.258.369-96 


  963.987.321-00

  963.987.32a.00 (NÃO VÁLIDO)
  963.987.32-00 (NÃO VÁLIDO)
`;

const cpfs2 = `254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00`;

const ips = `

Os Ips são:
   0.0.0.0

   192.168.0.25

        10.10.5.12

        10.01.10.20 (ESTE IP NÃO É VÁLIDO)
        10.021.08.20 (ESTE IP NÃO É VÁLIDO)

   255.255.255.255

`;

const alfabeto =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ atenção abcdefghijklmnopqrstuvwxyz ®¡ 0123456789 ¡";

const html = "<p>Olá mundo</p> <p>Olá de novo</p> <div>Sou a div</div>";
const html2 = `<p 
data-teste='teste' 
class="teste teste">
  Olá mundo
</p> <p>Olá mundo</p> <div>Sou a div</div>`;

const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive
`;

module.exports = {
  texto,
  arquivos,
  html,
  html2,
  alfabeto,
  cpfs,
  ips,
  cpfs2,
  lookahead,
};
