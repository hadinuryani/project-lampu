function saklar() {
    let toggleAll = document.getElementById("all");
    let toggleTamu = document.getElementById("toggleTamu");
    let toggleKeluarga = document.getElementById("toggleKeluarga");
    let toggleMakan = document.getElementById("toggleMakan");
    let toggleTidur = document.getElementById("toggleTidur");

    let lampTamu1 = document.getElementById("lampTamu1");
    let lampTamu2 = document.getElementById("lampTamu2");
    let lampTamu3 = document.getElementById("lampTamu3");
    let lampKeluarga1 = document.getElementById("lampKeluarga1");
    let lampKeluarga2 = document.getElementById("lampKeluarga2");
    let lampKeluarga3 = document.getElementById("lampKeluarga3");
    let lampMakan1 = document.getElementById("lampMakan1");
    let lampMakan2 = document.getElementById("lampMakan2");
    let lampTidur1 = document.getElementById("lampTidur1");
    let lampTidur2 = document.getElementById("lampTidur2");

    // Logika untuk toggle All
    if (toggleAll.checked) {
        // Jika All diaktifkan, semua lampu menyala
        lampTamu1.src = "asets/image/on.gif";
        lampTamu2.src = "asets/image/on.gif";
        lampTamu3.src = "asets/image/on.gif";
        lampKeluarga1.src = "asets/image/on.gif";
        lampKeluarga2.src = "asets/image/on.gif";
        lampKeluarga3.src = "asets/image/on.gif";
        lampMakan1.src = "asets/image/on.gif";
        lampMakan2.src = "asets/image/on.gif";
        lampTidur1.src = "asets/image/on.gif";
        lampTidur2.src = "asets/image/on.gif";

        // Matikan pengaruh toggle individu
        toggleTamu.checked = true;
        toggleKeluarga.checked = true;
        toggleMakan.checked = true;
        toggleTidur.checked = true;
    } else {
        // Jika All dimatikan, lampu mengikuti status toggle individu
        updateIndividualToggle();
    }
}

// Fungsi untuk mengupdate gambar lampu berdasarkan status toggle individu
function updateIndividualToggle() {
    let toggleTamu = document.getElementById("toggleTamu");
    let toggleKeluarga = document.getElementById("toggleKeluarga");
    let toggleMakan = document.getElementById("toggleMakan");
    let toggleTidur = document.getElementById("toggleTidur");

    let lampTamu1 = document.getElementById("lampTamu1");
    let lampTamu2 = document.getElementById("lampTamu2");
    let lampTamu3 = document.getElementById("lampTamu3");
    let lampKeluarga1 = document.getElementById("lampKeluarga1");
    let lampKeluarga2 = document.getElementById("lampKeluarga2");
    let lampKeluarga3 = document.getElementById("lampKeluarga3");
    let lampMakan1 = document.getElementById("lampMakan1");
    let lampMakan2 = document.getElementById("lampMakan2");
    let lampTidur1 = document.getElementById("lampTidur1");
    let lampTidur2 = document.getElementById("lampTidur2");

    // Update lampu ruang tamu
    lampTamu1.src = toggleTamu.checked ? "asets/image/on.gif" : "asets/image/off.gif";
    lampTamu2.src = toggleTamu.checked ? "asets/image/on.gif" : "asets/image/off.gif";
    lampTamu3.src = toggleTamu.checked ? "asets/image/on.gif" : "asets/image/off.gif";

    // Update lampu ruang keluarga
    lampKeluarga1.src = toggleKeluarga.checked ? "asets/image/on.gif" : "asets/image/off.gif";
    lampKeluarga2.src = toggleKeluarga.checked ? "asets/image/on.gif" : "asets/image/off.gif";
    lampKeluarga3.src = toggleKeluarga.checked ? "asets/image/on.gif" : "asets/image/off.gif";

    // Update lampu ruang makan
    lampMakan1.src = toggleMakan.checked ? "asets/image/on.gif" : "asets/image/off.gif";
    lampMakan2.src = toggleMakan.checked ? "asets/image/on.gif" : "asets/image/off.gif";

    // Update lampu ruang tidur
    lampTidur1.src = toggleTidur.checked ? "asets/image/on.gif" : "asets/image/off.gif";
    lampTidur2.src = toggleTidur.checked ? "asets/image/on.gif" : "asets/image/off.gif";
}

// Event listener untuk toggle All dan toggle individu
document.getElementById("all").addEventListener("change", saklar);
document.getElementById("toggleTamu").addEventListener("change", updateIndividualToggle);
document.getElementById("toggleKeluarga").addEventListener("change", updateIndividualToggle);
document.getElementById("toggleMakan").addEventListener("change", updateIndividualToggle);
document.getElementById("toggleTidur").addEventListener("change", updateIndividualToggle);
