// Broker publik EMQX lewat WebSocket Secure.
export const BROKER_URL = 'wss://broker.emqx.io:8084/mqtt'

// Akun simulasi per penghuni. Hanya untuk demo: password di sisi klien TIDAK aman.
export const USERS = [
  {
    username: 'Rina Kusuma',
    password: 'kamar1',
    nama: 'Rina Kusuma',
    kamar: '1',
    lantai: 1,
    hp: '0812-0000-0001',
    mulaiHuni: 'Agustus 2026',
    jatuhTempo: 'Tanggal 5 setiap bulan',
    tarif: 1444.7,
    targetBulanan: 200000,
    kwhBulanIni: 98.4,
    mqttBase: 'kosdemo/icha-kos',
    simulate: false,
    devices: [
      { id: 1, nama: 'Lampu 1', gpio: 'GPIO 21', watt: 12 },
      { id: 2, nama: 'Lampu 2', gpio: 'GPIO 15', watt: 12 },
    ],
  },
  {
    username: 'Dimas Pratama',
    password: 'kamar2',
    nama: 'Dimas Pratama',
    kamar: '2',
    lantai: 1,
    hp: '0812-0000-0002',
    mulaiHuni: 'Maret 2026',
    jatuhTempo: 'Tanggal 12 setiap bulan',
    tarif: 1444.7,
    targetBulanan: 150000,
    kwhBulanIni: 61.2,
    mqttBase: 'kosdemo/icha-kos-kamar2',
    simulate: true,
    devices: [
      { id: 1, nama: 'Kipas Angin', gpio: 'GPIO 21', watt: 45 },
      { id: 2, nama: 'Lampu Kamar', gpio: 'GPIO 15', watt: 12 },
    ],
  },
]