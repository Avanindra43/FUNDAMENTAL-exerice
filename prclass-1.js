console.log("test");

class Biodata {
    #name;
    #dob;
    #alamat;
    #mobile;
    #email;
    constructor (name, dob, alamat, mobile, email) {
        this.#name = name;
        this.#dob = dob;
        this.#alamat = alamat;
        this.#mobile = mobile;
        this.#email = email;
        
    }

    data() {
        return {
            nama: this.#name,
            dob: this.#dob,
            alamat: this.#alamat,
            mobile: this.#mobile,
            email: this.#email
        }
    }

    age(){
    const currentDate = new Date();
    const birth = new Date(this.#dob);
    let age = currentDate.getFullYear() - birth.getFullYear();
    if (birth.getMonth() >= currentDate.getMonth() && birth.getDate() > currentDate.getMonth()){
        age--;
    }
        return age;
    }


    say(){
        console.log(`Halo! Nama saya ${this.name}, umur saya ${this.age()}, alamat saya di ${this.alamat}`);
    }

};

class Dokter extends Biodata {
    #alamat_rumah_sakit;
    #profesi;
    #pengalaman_bekerja;
    constructor (name, dob, alamat, mobile, email, alamat_rumah_sakit, profesi, pengalaman_bekerja) {
        super(name, dob, alamat, mobile, email);
        this.#alamat_rumah_sakit = alamat_rumah_sakit;
        this.#profesi = "Dokter";
        this.#pengalaman_bekerja = pengalaman_bekerja;
    }

    get say() {
        return console.log(`Halo nama saya ${this.name}, saya berprofesi sebagai ${this.profesi} dan beroperasi di ${this.alamat_rumah_sakit}.`);
    }

    workExp() {
        const currentDate = new Date ();
        const exp = new Date(this.#pengalaman_bekerja);
        const res = currentDate.getFullYear() - exp.getFullYear();
        return res;
    }
};



class Ojol extends Biodata {
    #kendaraan;
    #profesi;
    #plat_nomor;
    constructor( name, dob, alamat, mobile, email, kendaraan, profesi, plat_nomor) {
    super(name, dob, alamat, mobile, email) 
        this.#kendaraan = kendaraan;
        this.#profesi = "Ojol";
        this.#plat_nomor = plat_nomor;
    }
    
    get say() {
        return console.log(`Halo nama saya ${this.name}, saya berprofesi sebagai ${this.profesi} dan kendaraan saya adaah ${this.kendaraan}`);
    }

};

const biodata = new Biodata("udin", "2000-08-01", "desa suka miskin", 144506, "udin@gmail.com");
console.log(biodata);
console.log(biodata.age());
console.log(biodata.say());

const dokter = new Dokter(biodata.name, biodata.dob, biodata.alamat, biodata.mobile, biodata.email, "Rs J", biodata.profesi, "1985")
const ojol = new Ojol(biodata.name, biodata.dob, biodata.alamat, biodata.mobile, biodata.email, "nissan r35", "ojol", "B 3214 TYL")

console.log(dokter);
console.log(ojol);
console.log(dokter.say);
console.log(ojol.say);