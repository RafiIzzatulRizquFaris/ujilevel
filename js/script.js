let jumlah_burger = 0;
let jumlah_ayam = 0;
let jumlah_kentang = 0;

let harga_burger = 12569;
let harga_ayam = 20000;
let harga_kentang = 30000;

const gambar_makanan = ['img/burger.jpg', 'img/ayam.jpg', 'img/kentang.jpg']

const nama_makanan = ['Burger', 'Ayam', 'Kentang'];

$('#board-burger').hide()
$('#board-ayam').hide()
$('#board-kentang').hide()

// =============================BURGER=============================

// tambah burger
$('#tambah_burger').on('click', function(){
    $('#board-kosong').hide();
    $('#board-burger').show();
    $('#gambar_burger').attr('src', gambar_makanan[0]);
    $('#nama_burger').text(nama_makanan[0]);
    let total = harga_burger*jumlah_burger+12569;
    $('#harga_burger').text(total);
    let hasil = jumlah_burger+1;
    // console.log(hasil);
    jumlah_burger = hasil;
    // console.log(jumlah_burger);
    $('#jumlah_burger').html(jumlah_burger);
    $('#bayar_burger').on('click', function(){
        $('#name_makanan').text(nama_makanan[0]);
        $('#harga_makanan').text(harga_burger);
        $('#jumlah_makanan').text(jumlah_burger);
        $('#total_makanan').text(total);
        $('#bayar').on('click', function(){
            let uang = $('#bayar_makanan').val()
            // console.log(uang);
            let kembalian = uang-total;
            console.log(kembalian);
            if(uang < total || uang < 0){
                // alert("transaksi gagal");
                $('#kembalian_makanan').text("Uang Anda Kurang");
            }else if(uang == total){
                $('#kembalian_makanan').text("uang anda pas");
            }else{
                // alert("transaksi berhasil");
                $('#kembalian_makanan').text(kembalian);
            }
        })
    })
    $('#hapus_burger').on('click', function(){
        $('#board-burger').hide();
        let reset = jumlah_burger*0;
        // console.log(reset);
        $('#jumlah_burger').html(reset);
    })
})

//kurang burger
$('#kurang_burger').on('click', function(){
    $('#board-kosong').hide();
    $('#board-burger').show()
    $('#gambar_burger').attr('src', gambar_makanan[0]);
    $('#nama_burger').text(nama_makanan[0]);
    let total = harga_burger*jumlah_burger-12569;
    $('#harga_burger').text(total);
    let hasil = jumlah_burger-1;
    // console.log(hasil);
    jumlah_burger = hasil;
    console.log(jumlah_burger);
    $('#jumlah_burger').html(jumlah_burger);
    $('#bayar_burger').on('click', function(){
        $('#name_makanan').text(nama_makanan[0]);
        $('#harga_makanan').text(harga_burger);
        $('#jumlah_makanan').text(jumlah_burger);
        $('#total_makanan').text(total);
        $('#bayar').on('click', function(){
            let uang = $('#bayar_makanan').val()
            // console.log(uang);
            let kembalian = uang-total;
            console.log(kembalian);
            if(uang < total || uang < 0){
                // alert("transaksi gagal");
                $('#kembalian_makanan').text("Uang Anda Kurang");
            }else if(uang == total){
                $('#kembalian_makanan').text("uang anda pas");
            }else{
                // alert("transaksi berhasil");
                $('#kembalian_makanan').text(kembalian);
            }
        })
    })
    $('#hapus_burger').on('click', function(){
        $('#board-burger').hide();
        let reset = jumlah_burger*0;
        // console.log(reset);
        $('#jumlah_burger').html(reset);
    })
})




// =============================AYAM=============================
//tambah ayam
$('#tambah_ayam').on('click', function(){
    $('#board-kosong').hide();
    $('#board-ayam').show()
    $('#gambar_ayam').attr('src', gambar_makanan[1]);
    $('#nama_ayam').text(nama_makanan[1]);
    let total = harga_ayam*jumlah_ayam+20000;
    $('#harga_ayam').text(total);
    let hasil = jumlah_ayam+1;
    // console.log(hasil);
    jumlah_ayam = hasil;
    // console.log(jumlah_burger);
    $('#jumlah_ayam').html(jumlah_ayam);
    $('#bayar_ayam').on('click', function(){
        $('#name_makanan').text(nama_makanan[1]);
        $('#harga_makanan').text(harga_ayam);
        $('#jumlah_makanan').text(jumlah_ayam);
        $('#total_makanan').text(total);
        $('#bayar').on('click', function(){
            let uang = $('#bayar_makanan').val()
            // console.log(uang);
            let kembalian = uang-total;
            console.log(kembalian);
            if(uang < total || uang < 0){
                // alert("transaksi gagal");
                $('#kembalian_makanan').text("Uang Anda Kurang");
            }else if(uang == total){
                $('#kembalian_makanan').text("uang anda pas");
            }else{
                // alert("transaksi berhasil");
                $('#kembalian_makanan').text(kembalian);
            }
        })
    })
    $('#hapus_ayam').on('click', function(){
        $('#board-ayam').hide();
        let reset = jumlah_ayam*0;
        // console.log(reset);
        $('#jumlah_ayam').html(reset);
    })
})

//kurang ayam
$('#kurang_ayam').on('click', function(){
    $('#board-kosong').hide();
    $('#board-ayam').show()
    $('#gambar_ayam').attr('src', gambar_makanan[1]);
    $('#nama_ayam').text(nama_makanan[1]);
    let total = harga_ayam*jumlah_ayam-20000;
    $('#harga_ayam').text(total);
    let hasil = jumlah_ayam-1;
    // console.log(hasil);
    jumlah_ayam = hasil;
    // console.log(jumlah_burger);
    $('#jumlah_ayam').html(jumlah_ayam);
    $('#bayar_ayam').on('click', function(){
        $('#name_makanan').text(nama_makanan[1]);
        $('#harga_makanan').text(harga_ayam);
        $('#jumlah_makanan').text(jumlah_ayam);
        $('#total_makanan').text(total);
        $('#bayar').on('click', function(){
            let uang = $('#bayar_makanan').val()
            // console.log(uang);
            let kembalian = uang-total;
            console.log(kembalian);
            if(uang < total || uang < 0){
                // alert("transaksi gagal");
                $('#kembalian_makanan').text("Uang Anda Kurang");
            }else if(uang == total){
                $('#kembalian_makanan').text("uang anda pas");
            }else{
                // alert("transaksi berhasil");
                $('#kembalian_makanan').text(kembalian);
            }
        })
    })
    $('#hapus_ayam').on('click', function(){
        $('#board-ayam').hide();
        let reset = jumlah_ayam*0;
        // console.log(reset);
        $('#jumlah_ayam').html(reset);
    })
})






// =============================KENTANG=============================
//tambah kentang
$('#tambah_kentang').on('click', function(){
    $('#board-kosong').hide();
    $('#board-kentang').show();
    $('#nama_kentang').text(nama_makanan[2]);
    $('#gambar_kentang').attr('src', gambar_makanan[2]);
    let total = harga_kentang*jumlah_kentang+30000
    $('#harga_kentang').text(total);
    let hasil = jumlah_kentang+1;
    jumlah_kentang = hasil
    $('#jumlah_kentang').text(jumlah_kentang);
    $('#bayar_kentang').on('click', function(){
        $('#name_makanan').text(nama_makanan[2]);
        $('#harga_makanan').text(harga_kentang);
        $('#jumlah_makanan').text(jumlah_kentang);
        $('#total_makanan').text(total);
        $('#bayar').on('click', function(){
            let uang = $('#bayar_makanan').val()
            // console.log(uang);
            let kembalian = uang-total;
            console.log(kembalian);
            if(uang < total || uang < 0){
                // alert("transaksi gagal");
                $('#kembalian_makanan').text("Uang Anda Kurang");
            }else if(uang == total){
                $('#kembalian_makanan').text("uang anda pas");
            }else{
                // alert("transaksi berhasil");
                $('#kembalian_makanan').text(kembalian);
            }
        })
    })
    $('#hapus_kentang').on('click', function(){
        $('#board-kentang').hide()
        let reset = jumlah_kentang*0;
        $('#jumlah_kentang').text(reset);
    })
})

//kurang kentang
$('#kurang_kentang').on('click', function(){
    $('#board-kosong').hide();
    $('#board-kentang').show();
    $('#nama_kentang').text(nama_makanan[2]);
    $('#gambar_kentang').attr('src', gambar_makanan[2]);
    let total = harga_kentang*jumlah_kentang-30000
    $('#harga_kentang').text(total);
    let hasil = jumlah_kentang-1;
    jumlah_kentang = hasil
    $('#jumlah_kentang').text(jumlah_kentang);
    $('#bayar_kentang').on('click', function(){
        $('#name_makanan').text(nama_makanan[2]);
        $('#harga_makanan').text(harga_kentang);
        $('#jumlah_makanan').text(jumlah_kentang);
        $('#total_makanan').text(total);
        $('#bayar').on('click', function(){
            let uang = $('#bayar_makanan').val()
            // console.log(uang);
            let kembalian = uang-total;
            console.log(kembalian);
            if(uang < total || uang < 0){
                // alert("transaksi gagal");
                $('#kembalian_makanan').text("Uang Anda Kurang");
            }else if(uang == total){
                $('#kembalian_makanan').text("uang anda pas");
            }else{
                // alert("transaksi berhasil");
                $('#kembalian_makanan').text(kembalian);
            }
        })
    })
    $('#hapus_kentang').on('click', function(){
        $('#board-kentang').hide()
        let reset = jumlah_kentang*0;
        $('#jumlah_kentang').text(reset);
    })
})