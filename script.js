let btnSubmit = document.getElementById("submit")
let hasil = document.getElementById("hasil")

// Memangil child dari form
let daftar = document.forms.daftar
let nama = daftar.elements.nama
let email = daftar.elements.email
let telp = daftar.elements.telp
let tempat = daftar.elements.tempat
let tglLahir = daftar.elements.tglLahir
let alamat = daftar.elements.alamat
let ortu = daftar.elements.ortu
let jk = daftar.elements.jk
let jurusan = daftar.elements.jurusan
let cek = false

nama.onchange = () => {
    hasil.innerHTML
}

email.onblur = () => {
    if (!email.value.includes('@')) {
        alert("Kamu harus menyertakan tanda '@' pada inputan email")

    } else {
        hasil.innerHTML = ""
        cek = true
    }
}

btnSubmit.onclick = (d) => {
    d.preventDefault()

    // Mengambil inputan dari forms
    let valueNama = nama.value
    let valueEmail = email.value
    let valueTelp = telp.value
    let valueTempat = tempat.value
    let valueTglLahir = tglLahir.value
    let valueAlamat = alamat.value
    let valueOrtu = ortu.value
    let valueJk = jk.value
    let valueJurusan = jurusan.value
    let selectJurusan = jurusan.options[jurusan.selectedIndex].text

    if (cek == true) {
        hasil.innerHTML = "<h3> Selamat data anda telah diterima oleh admin <br></h3>" + "Nama : " + valueNama + "<br>Email : " + valueEmail + "<br>No. Telp : " + valueTelp + "<br>TTL : " + valueTempat + ", " + valueTglLahir + "<br>Alamat : " + valueAlamat + "<br>Nama Orang Tua/Wali : " + valueOrtu +"<br>Jenis Kelamin" + valueJk + "<br>Jurusan : " + selectJurusan
    }
}

