// Array sa svim pitanjima i odgovorima
const pitanja = 
[
    {
        "pitanje": "Kome se djeder namjerio kad je odbio prodati kartu?",
        "odg_1": "Seto",
        "odg_2": "Mirza",
        "odg_3": "Jusuf",
        "tocan_odg": "A"
    },

    {
        "pitanje": "Na koliko se puta Jusuf pomustafio?",
        "odg_1": "Jednom",
        "odg_2": "Dvaput",
        "odg_3": "Ovisi 'ko pita",
        "tocan_odg": "B"
    },
    
    {
        "pitanje": "Ragazzi su djederu istrgnuli...",
        "odg_1": "Špil karata iz ruku",
        "odg_2": "Bocu votke iz rerne",
        "odg_3": "Kosmodisk sa ledja",
        "tocan_odg": "C"
    },

    {
        "pitanje": "Jusuf zaziva djedera da mu pomogne, koju kartu pritom izvlači?",
        "odg_1": "Kurati bik",
        "odg_2": "Sibirski plavac",
        "odg_3": "Husein Kapetan Gradašević",
        "tocan_odg": "C"
    },  

    {
        "pitanje": "Seto gubi meč jer nije mogao bagera upalit. Što mu je otišlo na bageru?",
        "odg_1": "Lamela",
        "odg_2": "Brtva glave motora",
        "odg_3": "Karter",
        "tocan_odg": "A"
    }  
];

// Definirane sve varijable
var pitanje = document.getElementById("pitanje");
var lab_1 = document.getElementById("lab_1");
var lab_2 = document.getElementById("lab_2");
var lab_3 = document.getElementById("lab_3");            
var tocni_odg = 0;
var br_pitanja = 0;
var form = document.getElementById("sva_pitanja");
var progress_bar = document.getElementById("progress_bar");
var bar_counter = document.getElementById("bar_counter");
var rezultati = document.getElementById("rezultati");
var botun1 = document.getElementById("botun1");
var botun2 = document.getElementById("botun2");
var botun3 = document.getElementById("botun3");

// Postavljanje prvog pitanja
pitanje.innerHTML = pitanja[br_pitanja].pitanje;
lab_1.innerHTML = pitanja[br_pitanja].odg_1;
lab_2.innerHTML = pitanja[br_pitanja].odg_2;
lab_3.innerHTML = pitanja[br_pitanja].odg_3;            

function sendere()
{
    // Provjera da radio button nije prazan
    if (form.checkValidity() == false)
    {
        console.log("Odgovor ne može biti prazno!")
    }

    else
    {
        // Broj pitanja se povećava za 1 sa svakim klikom gumba
        if (br_pitanja == br_pitanja) 
        {
            // Definiraju se varijable te provjerava je li vrijednost odabranog odgovora iz kviza jednak vrijednosti tocnog odgovora u arrayu
            let from_kviz = form.elements["check"].value;
            let to_compare = pitanja[br_pitanja].tocan_odg;

            if (from_kviz == to_compare)
            {
                console.log("GOOD - Pitanje " + (br_pitanja + 1) + ": Selected: " + from_kviz + "; Correct answer: " + to_compare)
                tocni_odg++;
            }
            else
            {
                console.log("NOT GOOD - Pitanje " + (br_pitanja + 1) + ": Selected: " + from_kviz + "; Correct answer: " + to_compare)
            }

            // U svakom slučaju progress bar napreduje te se povećava sa svakim pitanjem
            progress_bar.value = 20 * (br_pitanja + 1);
        }

        // Broj pitanja se povećava za 1, tj. sa 0 na 1
        br_pitanja++;    

        // Ukoliko je broj pitanja manji od broja ukupnih pitanja u arrayu, ispisat će se novi set pitanja i odgovora u htmlu
        if (br_pitanja == br_pitanja && br_pitanja < pitanja.length)
        {
            pitanje.innerHTML = pitanja[br_pitanja].pitanje;
            lab_1.innerHTML = pitanja[br_pitanja].odg_1;
            lab_2.innerHTML = pitanja[br_pitanja].odg_2;
            lab_3.innerHTML = pitanja[br_pitanja].odg_3; 

            // Prethodni odabir se resetira, a brojač u progress baru povećava za 1
            form.reset()
            bar_counter.innerHTML = br_pitanja + "/5 pitanja";
        }

        else
        {
            // Kad nema više pitanja kviz se privodi kraju
            bar_counter.innerHTML = br_pitanja + "/5 pitanja";
            console.log("Kraj kviza.")
            console.log("Broj točnih odgovora: " + tocni_odg)
            form.remove();
            botun1.remove();
            botun2.remove();
            botun3.style.display = "block";

            // Različit output ovisno o broju točnih odgovora
            switch (tocni_odg) 
            {
                case 0:
                    rezultati.innerHTML = "Broj točnih odgovora: " + tocni_odg + ". Kriminalno loše, tragedija.";
                    break;
                case 1:
                    rezultati.innerHTML = "Broj točnih odgovora: " + tocni_odg + ". Kakvo razočarenje...";
                    break;
                case 2:
                    rezultati.innerHTML = "Broj točnih odgovora: " + tocni_odg + ". Može to i bolje roki...";
                    break;
                case 3:
                    rezultati.innerHTML = "Broj točnih odgovora: " + tocni_odg + ". Neloše.";
                    break;
                case 4:
                    rezultati.innerHTML = "Broj točnih odgovora: " + tocni_odg + ". Netko je gledao Sibirskog Plavca...";
                    break;
                case 5:
                    rezultati.innerHTML = "Broj točnih odgovora: " + tocni_odg + ". Ni kurati bik ti nemore ništa. Fantastično!";
                    break;                                
            }
        }
    }
}

function resetare()
{
    location.reload();
}