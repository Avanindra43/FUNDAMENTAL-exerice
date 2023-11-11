

//buat class Bio data
// class bio data akan menampung data user berupa
// nama, tanggal lahir, alamat, mobile, email (dari tanggal lahir bisa jadi umur)
//buat juga method bernama say => method untuk memperkenalkan diri = "halo nama saya udin, umur saya 100 tahun, alamat saya di bsd"

//buat lah kelas turunan untuk profesi dari class bio data
// kelas dokter memiliki informasi tambahan berupa
// alamat_rumah_sakit, profesi, pengalaman_bekerja(tahun)

//kelas ojol
// kendaraan, profesi, plat_nomor

//di kelas dokter method say akan berubah menjadi = "halo nama saya udin, saya berprofesi sebagai dokter dan beroperasi di rs bsd"
// di kelas ojol method say akan berubah menjadi = "halo nama saya udin, saya berprofesi sebagai ojol dan kendaraan saya adalah nissan r35"

//seluruh bio data diatas tidak dapat diganti tapi bisa dicek valuenya seperti property pada umumnya = lewat getter tanpa setter



// const date = new Date ()
// const year = date.getFullYear();
// // const dob = 2000
// console.log(date - dob);




// const birth = "2000-10-12";
// const dob = new Date(birth);
// currentDate = new Date;
// let age =  currentDate.getFullYear() - dob.getFullYear(); 
// if (dob.getMonth() >= currentDate.getMonth() && dob.getDate() > currentDate.getMonth()) {
//     age--;
// }

// console.log(dob);
// console.log(age);

class Biodata {
    constructor (name, dob, alamat, mobile, email) {
        this.name = name;
        this.dob = dob;
        this.alamat = alamat;
        this.mobile = mobile;
        this.email = email;
        
    }

    age(){
    const currentDate = new Date();
    const birth = new Date(this.dob);
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
    
    constructor (name, dob, alamat, mobile, email, alamat_rumah_sakit, profesi, pengalaman_bekerja) {
        super(name, dob, alamat, mobile, email);
        this.alamat_rumah_sakit = alamat_rumah_sakit;
        this.profesi = "Dokter";
        this.pengalaman_bekerja = pengalaman_bekerja;
    }

    get say() {
        return console.log(`Halo nama saya ${this.name}, saya berprofesi sebagai ${this.profesi} dan beroperasi di ${this.alamat_rumah_sakit}.`);
    }

    workExp() {
        const currentDate = new Date ();
        const exp = new Date(this.pengalaman_bekerja);
        const res = currentDate.getFullYear() - exp.getFullYear();
        return res;
    }
};



class Ojol extends Biodata {
    constructor( name, dob, alamat, mobile, email, kendaraan, profesi, plat_nomor) {
    super(name, dob, alamat, mobile, email) 
        this.kendaraan = kendaraan;
        this.profesi = profesi;
        this.plat_nomor = plat_nomor;
    }
    
    get ojol() {
        return 
    }

};

const biodata = new Biodata("udin", "2000-08-01", "desa suka miskin", 144506, "udin@gmail.com");
console.log(biodata);
console.log(biodata.age());
console.log(biodata.say());

const dokter = new Dokter(biodata.name, biodata.dob, biodata.alamat, biodata.mobile, biodata.email, "Rs J", biodata.profesi, "1985")
const ojol = new Ojol()

console.log(dokter.workExp());
console.log(dokter.say);

console.log(ojol.plat_nomor);
console.log(biodata);


