/* ============================================================
   SOFT CHAOS · SCRIPT
   ============================================================ */
const TANGGAL_MULAI = new Date('2025-12-17T00:00:00');
const NAMA_DIA  = 'Hijri';
const NAMA_KAMU = 'Fadlan';

/* ============================================================
   DATA
   ============================================================ */
const REASONS = [
  { emoji: '🌿', text: 'Karena kamu bikin hal-hal biasa jadi terasa lebih tenang.' },
  { emoji: '☕', text: 'Karena ngobrol sama kamu gak pernah bikin mas bosen.' },
  { emoji: '🎧', text: 'Karena kamu selalu tau kapan mas butuh didengerin.' },
  { emoji: '🌙', text: 'Karena kamu manis, tapi juga ngeselin — kombinasi favorit aku.' },
  { emoji: '📷', text: 'Karena momen paling random pun jadi berkesan kalau sama kamu.' },
  { emoji: '🌼', text: 'Karena kamu dewasa, tapi gak kehilangan sisi lucunya.' },
  { emoji: '🍓', text: 'Karena kamu peka, lebih dari yang kamu sadari.' },
  { emoji: '✨', text: 'Karena kamu selalu jadi diri kamu sendiri, tanpa pura-pura.' },
  { emoji: '🎯', text: 'Karena kamu buka semua card ini. Berarti kamu beneran penasaran sama aku. Gemes.' }
];

const SURAT = `Untuk Hijri,

Dari 17 Desember 2025 sampai sekarang,
Mas masih mikir — kok bisa ya, mas seberuntung ini.

Kamu bukan cuma cantik.
Kamu tenang, kamu hangat,
kamu bikin hari-hari biasa jadi betah.

Betah? Beteh? Beteh itu apa sih.
Bodo amat, kamu ngerti maksud aku.

Makasih ya udah ada.
Makasih udah jadi kamu.

Oh iya — satu lagi.
Jangan skip bagian akhir ya. Mas tau kalau kamu skip.

Mas sayang kamu. Selalu.`;

const CAPTIONS_DEFAULT = [
  'Yang ini idol. Cantik ya?',
  'Wonyoung. Cantik, tapi bukan kamu.',
  'Kamu suka dia ya? Gapapa, wajar.',
  'Kalau dia idol, kamu apa dong?',
  'Coba lagi deketin. Ada rahasia.'
];

const CAPTIONS_REVEALED = [
  'Nah. Ini yang cantik. 👑',
  'Coba lagi deh. Lebih cantik yang ini.',
  'Ketauan. Ini yang beneran.',
  'Wonyoung kalah. Bukan debat.',
  'Hai sayang. Kangen gak? 😌'
];

const POPUP_PESAN = [
  'Kamu lagi ngapain? Jangan bohong, mas tau 👀',
  'Eh, mas lagi mikirin kamu. Gak penting sih. Tapi ya gitu.',
  'Kamu udah makan? Kalau belum, mas ngambek beneran.',
  'Mas tau kamu lagi senyum. Gak usah sok cool.',
  'Kangen gak? Jawab jujur, kalau bohong mas tau.',
  'Kamu cantik. Itu fakta, bukan pendapat.',
  'Btw, mas masih sayang kamu. Cuma info.',
  'Kamu scroll terus ya? Sabar dikit.',
  'Kalau kamu tutup popup ini, mas muncul lagi. Coba aja 😌',
  'Kamu tuh... ya gitu deh. Bikin mas gak bisa fokus.',
  'Hai. Iya kamu. Yang lagi baca sambil nyengir. Ketauan 😏',
  'Kamu lebih cantik dari Wonyoung. Jangan bilang siapa-siapa.'
];

const NGAMBEK_PESAN = [
  'Iya, mas tau kamu gak serius ngambek. Kamu cuma pengen dipeluk 🫂',
  'Yaudah, mas juga ngambek. Tapi tetep sayang.',
  'Kamu ngambek pun, mas masih milih kamu.',
  'Bentar, mas ambil boba dulu. Terus kita damai ya.',
  'Kesel kamu tuh lucu, tau gak?',
  'Oke, mas ngaku salah. Puas? Sekarang senyum dong 😌'
];

const CHAT_BALASAN = [
  'Iya sayang 💕',
  'Hmm... mas gak denger. Ulang dong 🙉',
  'Kamu kok gitu sih 😤 (tapi mas suka)',
  'Mas lagi mikirin kamu nih 🥰',
  'Bentar, mas lagi senyum-senyum sendiri 😳',
  'Kangen ya? Jujur aja 👀',
  'Iya iya, kamu yang paling bener 😌',
  'Boba dulu baru jawab 🧋',
  'Kamu tuh ya... bikin mas gak bisa fokus 🥺',
  'Mas masih di sini kok. Gak kemana-mana.',
  'Kalau kamu bilang sayang, mas baper. Serius.',
  'Oke, mas ngaku. Mas kangen.'
];

const FAKE_NOTIF_DATA = [
  { name: 'Wonyoung versi Hijri 💕', text: 'Hai sayang, lagi ngapain? 🥰' },
  { name: 'Wonyoung versi Hijri 💕', text: 'Kangen kamu nih, jujur.' },
  { name: 'Wonyoung versi Hijri 💕', text: 'Jangan lupa makan ya sayang 🍜' },
  { name: 'Wonyoung versi Hijri 💕', text: 'Mas lagi mikirin kamu 😳' },
  { name: 'Wonyoung versi Hijri 💕', text: 'Kamu cantik hari ini. Fakta.' },
  { name: 'Wonyoung versi Hijri 💕', text: 'Semangat ya, mas bangga 💪' }
];

const TROLL_PESAN_VIDEO = [
  'Eh, ini videonya salah. Becanda 😜',
  'Bentar, mas cari remote dulu.',
  'Kualitas videonya jelek ya? Itu kamu yang jelek... eh salah, maksudnya bagus.',
  'Video ini bikin mas kangen kamu. Ya iyalah, kamu ada di situ.'
];

const SPAM_NOTIF = [
  'Kamu masih di sini? Gemes banget 🥺',
  'Eh, jangan kemana-mana. Mas masih ngobrol sama kamu.',
  'Kamu tau gak sih, Mas tuh gak bisa berhenti mikirin kamu.',
  'Btw, kamu udah minum air belum? Serius nih.',
  'Kalau kamu bosen, scroll ke atas. Mas gak bosen sama kamu.',
  'Kamu ngetik apa sih? Jangan bohong, mas tau.'
];

const LOADING_TROLL = [
  'Sebentar, mas lagi nyari alasan buat nge-chat kamu...',
  'Loading... mas lagi mikirin cara ngambek yang lucu.',
  'Hampir selesai. Jangan ke mana-mana ya.',
  'Bentar, mas baru inget. Mas kangen kamu.'
];

/* ============================================================
   LOADING
   ============================================================ */
(function initLoading() {
  const fill = document.getElementById('loadingFill');
  const percent = document.getElementById('loadingPercent');
  const joke = document.getElementById('loadingJoke');
  const btnMasuk = document.getElementById('btnMasuk');
  const loading = document.getElementById('loading');

  let val = 0;
  let trollIndex = 0;

  const iv = setInterval(() => {
    val += Math.random() * 8 + 2;
    if (val > 99) val = 99;
    fill.style.width = val + '%';
    percent.textContent = Math.floor(val) + '%';

    if (Math.random() < 0.15 && joke.textContent.length < 2) {
      joke.textContent = LOADING_TROLL[trollIndex % LOADING_TROLL.length];
      trollIndex++;
    }

    if (val >= 99) {
      clearInterval(iv);
      setTimeout(() => { joke.textContent = 'Sebentar, cinta mas lagi loading...'; }, 500);
      setTimeout(() => {
        joke.textContent = 'Yasudah, 99% aja. Cinta mas emang gak ada habisnya.';
        btnMasuk.classList.remove('hidden');
      }, 3000);
    }
  }, 200);

  btnMasuk.addEventListener('click', () => {
    loading.classList.add('hide');
    setTimeout(() => loading.remove(), 700);
  });
})();

/* ============================================================
   SAPAAN DINAMIS
   ============================================================ */
(function initSapaan() {
  const el = document.getElementById('sapaanWaktu');
  if (!el) return;
  const jam = new Date().getHours();
  let s = 'Selamat datang kembali, sayang.';
  if (jam >= 5 && jam < 11)       s = 'Selamat pagi, Hijri. Kamu bangun jam segini cantik gak? Pasti iya.';
  else if (jam >= 11 && jam < 15) s = 'Selamat siang, Hijri. Udah makan belum?';
  else if (jam >= 15 && jam < 18) s = 'Selamat sore, Hijri. Lagi ngapain?';
  else                             s = 'Selamat malam, Hijri. Jangan begadang ya, mas jagain.';
  el.textContent = s;
})();

/* ============================================================
   REVEAL
   ============================================================ */
(function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el) => io.observe(el));
})();

/* ============================================================
   NAV
   ============================================================ */
(function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
})();

/* ============================================================
   HERO BTN + TOMBOL KABUR
   ============================================================ */
(function initHeroBtn() {
  const btn = document.getElementById('btnMasukHero');
  if (!btn) return;
  let kabur = 0;

  btn.addEventListener('mouseover', () => {
    kabur++;
    if (kabur < 5) {
      const x = (Math.random() - 0.5) * 300;
      const y = (Math.random() - 0.5) * 150;
      btn.style.transform = `translate(${x}px, ${y}px)`;
      btn.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    } else {
      btn.style.transform = 'translate(0, 0)';
      const text = btn.querySelector('.btn-hero-text');
      if (text) text.textContent = 'Yaudah klik aja 🥺';
    }
  });

  btn.addEventListener('click', () => {
    const target = document.getElementById('wonyoung');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
})();

/* ============================================================
   COUNTER
   ============================================================ */
(function initCounter() {
  function update() {
    const now = new Date();
    const diff = now - TANGGAL_MULAI;
    const hari  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const jam   = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const menit = Math.floor((diff / (1000 * 60)) % 60);
    const detik = Math.floor((diff / 1000) % 60);

    const elHari  = document.getElementById('hari');
    const elJam   = document.getElementById('jam');
    const elMenit = document.getElementById('menit');
    const elDetik = document.getElementById('detik');
    if (!elHari) return;

    elHari.textContent  = hari;
    elJam.textContent   = String(jam).padStart(2, '0');
    elMenit.textContent = String(menit).padStart(2, '0');
    elDetik.textContent = String(detik).padStart(2, '0');

    const elMie = document.getElementById('mie');
    const elLagu = document.getElementById('lagu');
    const elKangen = document.getElementById('kangen');
    const elKetawa = document.getElementById('ketawa');
    if (elMie) elMie.textContent = (hari * 3).toLocaleString('id-ID');
    if (elLagu) elLagu.textContent = (hari * 24).toLocaleString('id-ID');
    if (elKangen) elKangen.textContent = hari.toLocaleString('id-ID');
    if (elKetawa) elKetawa.textContent = (hari * 4).toLocaleString('id-ID');
  }
  update();
  setInterval(update, 1000);
})();

/* ============================================================
   REASONS
   ============================================================ */
(function initReasons() {
  const grid = document.getElementById('reasonsGrid');
  if (!grid) return;

  REASONS.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.innerHTML = `
      <span class="story-num">0${i + 1}</span>
      <div class="story-content">
        <span class="story-emoji">${r.emoji}</span>
        <span class="story-text">${r.text}</span>
      </div>
    `;
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      if (card.classList.contains('flipped') && Math.random() < 0.3) {
        const pesan = ['Iya, itu bener 😌', 'Betul banget.', 'Nah, itu dia.', 'Setuju kan?'];
        tampilkanNotif(pesan[Math.floor(Math.random() * pesan.length)]);
      }
    });
    grid.appendChild(card);
  });
})();

/* ============================================================
   VIDEO + TROLL
   ============================================================ */
(function initVideo() {
  const videos = document.querySelectorAll('.video-frame video');
  videos.forEach((video, i) => {
    const frame = video.parentElement;
    const btn = frame.querySelector('.play-btn');

    if (btn) {
      let klikPertama = true;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (i % 2 === 0 && klikPertama && Math.random() < 0.6) {
          klikPertama = false;
          frame.classList.add('trolled');
          setTimeout(() => frame.classList.remove('trolled'), 500);
          tampilkanNotif(TROLL_PESAN_VIDEO[Math.floor(Math.random() * TROLL_PESAN_VIDEO.length)]);
          return;
        }
        video.play();
        frame.classList.add('playing');
      });
    }

    video.addEventListener('click', () => {
      if (video.paused) video.play();
      else video.pause();
    });

    video.addEventListener('play', () => {
      frame.classList.add('playing');
      videos.forEach((v) => { if (v !== video) v.pause(); });
    });

    video.addEventListener('pause', () => frame.classList.remove('playing'));
    video.addEventListener('ended', () => {
      frame.classList.remove('playing');
      video.currentTime = 0;
    });

    video.addEventListener('dblclick', () => {
      if (video.requestFullscreen) video.requestFullscreen();
      else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    });
  });
})();

/* ============================================================
   MUSIC + TROLL
   ============================================================ */
(function initMusic() {
  const music = document.getElementById('bgMusic');
  const toggle = document.getElementById('musicToggle');
  if (!music || !toggle) return;
  let started = false;
  let tryCount = 0;
  let sudahBisa = false;

  toggle.addEventListener('click', (e) => {
    if (!sudahBisa) {
      tryCount++;
      if (tryCount === 1) {
        e.stopImmediatePropagation();
        tampilkanNotif('Musiknya error kayak perasaan aku 😔');
        return;
      } else if (tryCount === 2) {
        e.stopImmediatePropagation();
        tampilkanNotif('Becanda. Nih, nyalain sendiri 🎵');
        sudahBisa = true;
        return;
      }
    }

    if (music.paused) {
      music.play().then(() => toggle.classList.add('playing')).catch(() => {});
    } else {
      music.pause();
      toggle.classList.remove('playing');
    }
  });

  document.body.addEventListener('click', () => {
    if (!started && music.paused) {
      started = true;
      music.play().then(() => toggle.classList.add('playing')).catch(() => {});
    }
  }, { once: true });
})();

/* ============================================================
   SOFT CROSSFADE PORTRAIT: WONYOUNG ↔ HIJRI
   ============================================================ */
(function initSoftPortrait() {
  const portrait = document.getElementById('blinkPortrait');
  if (!portrait) return;

  const badge = document.getElementById('blinkBadge');
  const caption = document.getElementById('blinkCaption');
  const sparkleContainer = document.getElementById('sparkleContainer');

  let revealed = false;
  let locked = false;
  let badgeHidden = false;
  let firstReveal = true;
  let hoverTimer = null;

  /* Sparkle halus */
  function spawnSparkles(count = 4) {
    if (!sparkleContainer) return;
    for (let i = 0; i < count; i++) {
      const sp = document.createElement('span');
      sp.className = 'sparkle';
      sp.textContent = ['✨', '💕', '🎀', '⭐', '💗'][Math.floor(Math.random() * 5)];
      sp.style.left = (20 + Math.random() * 60) + '%';
      sp.style.top = (20 + Math.random() * 60) + '%';
      sp.style.animationDelay = (i * 0.08) + 's';
      sparkleContainer.appendChild(sp);
      setTimeout(() => sp.remove(), 1600);
    }
  }

  /* Switch dengan smooth crossfade */
  function switchTo(showHijri) {
    if (locked) return;
    if (revealed === showHijri) return;
    locked = true;

    spawnSparkles(showHijri ? 8 : 4);
    portrait.classList.add('transitioning');

    setTimeout(() => {
      if (showHijri) {
        portrait.classList.add('revealed');
      } else {
        portrait.classList.remove('revealed');
      }
    }, 150);

    setTimeout(() => {
      if (caption) {
        caption.textContent = showHijri
          ? CAPTIONS_REVEALED[Math.floor(Math.random() * CAPTIONS_REVEALED.length)]
          : CAPTIONS_DEFAULT[Math.floor(Math.random() * CAPTIONS_DEFAULT.length)];
        caption.classList.toggle('revealed', showHijri);
      }
    }, 400);

    setTimeout(() => {
      portrait.classList.remove('transitioning');
      revealed = showHijri;
      locked = false;
    }, 1000);

    if (showHijri && firstReveal) {
      firstReveal = false;
      setTimeout(() => {
        tampilkanNotif('Nah. Itu kamu. Lebih cantik kan? 😌');
      }, 900);
    }
  }

  /* Desktop: hover */
  portrait.addEventListener('mouseenter', () => {
    if (window.matchMedia('(hover: hover)').matches) {
      hoverTimer = setTimeout(() => {
        switchTo(true);
      }, 120);
    }
    if (!badgeHidden && badge) {
      badge.classList.add('hide');
      badgeHidden = true;
    }
  });

  portrait.addEventListener('mouseleave', () => {
    if (hoverTimer) clearTimeout(hoverTimer);
    if (window.matchMedia('(hover: hover)').matches) {
      switchTo(false);
    }
  });

  /* Mobile: tap */
  portrait.addEventListener('click', () => {
    if (window.matchMedia('(hover: hover)').matches) return;
    switchTo(!revealed);
    if (!badgeHidden && badge) {
      badge.classList.add('hide');
      badgeHidden = true;
    }
  });

  /* Touch feedback halus */
  portrait.addEventListener('touchstart', () => {
    if (window.matchMedia('(hover: hover)').matches) return;
    portrait.style.transform = 'scale(0.985)';
  }, { passive: true });

  portrait.addEventListener('touchend', () => {
    if (window.matchMedia('(hover: hover)').matches) return;
    portrait.style.transform = '';
  }, { passive: true });
})();

/* ============================================================
   CHAT PALSU
   ============================================================ */
(function initChat() {
  const input = document.getElementById('chatInput');
  const send = document.getElementById('chatSend');
  const box = document.getElementById('chatBox');
  const typing = document.getElementById('chatTyping');
  if (!input || !send || !box) return;

  function kirim() {
    const teks = input.value.trim();
    if (!teks) return;

    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble chat-user';
    userBubble.innerHTML = `<span>${escapeHtml(teks)}</span>`;
    box.insertBefore(userBubble, typing);
    input.value = '';
    box.scrollTop = box.scrollHeight;

    typing.classList.remove('hidden');
    box.scrollTop = box.scrollHeight;

    setTimeout(() => {
      typing.classList.add('hidden');

      let balasan;
      const low = teks.toLowerCase();
      if (low.includes('wonyoung')) {
        balasan = 'Wonyoung? Kamu lebih cantik. Fakta. 💕';
      } else if (low.includes('sayang')) {
        balasan = 'Mas juga sayang kamu. Banyak. Banget. Serius.';
      } else if (low.includes('kangen')) {
        balasan = 'Mas juga kangen. Tiap hari. Gak pernah bosen.';
      } else if (low.includes('ngambek')) {
        balasan = 'Yaudah, mas juga ngambek. Tapi tetep sayang.';
      } else {
        balasan = CHAT_BALASAN[Math.floor(Math.random() * CHAT_BALASAN.length)];
      }

      const botBubble = document.createElement('div');
      botBubble.className = 'chat-bubble chat-bot';
      botBubble.innerHTML = `
        <img src="https://api.dicebear.com/7.x/thumbs/svg?seed=wonyoung&backgroundColor=ffd5dc" class="chat-avatar" />
        <span>${escapeHtml(balasan)}</span>
      `;
      box.insertBefore(botBubble, typing);
      box.scrollTop = box.scrollHeight;
    }, 1500);
  }

  send.addEventListener('click', kirim);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') kirim(); });
})();

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ============================================================
   NOTIF PALSU
   ============================================================ */
(function initFakeNotif() {
  const notif = document.getElementById('fakeNotif');
  const nameEl = document.getElementById('fakeNotifName');
  const textEl = document.getElementById('fakeNotifText');
  if (!notif) return;

  let index = 0;
  function munculkan() {
    const data = FAKE_NOTIF_DATA[index % FAKE_NOTIF_DATA.length];
    index++;
    nameEl.textContent = data.name;
    textEl.textContent = data.text;
    notif.classList.remove('hidden', 'hide');
    setTimeout(() => notif.classList.add('hide'), 4500);
    setTimeout(() => notif.classList.add('hidden'), 5000);
  }
  setTimeout(munculkan, 6000);
  setInterval(munculkan, 30000);
})();

/* ============================================================
   SURAT TYPING
   ============================================================ */
(function initLetter() {
  const target = document.getElementById('letterText');
  if (!target) return;
  let started = false;

  function mulai() {
    if (started) return;
    started = true;
    let i = 0;
    const iv = setInterval(() => {
      target.textContent = SURAT.slice(0, i);
      i++;
      if (i > SURAT.length) clearInterval(iv);
    }, 38);
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) mulai(); });
  }, { threshold: 0.3 });
  io.observe(document.getElementById('letter'));
})();

/* ============================================================
   SURPRISE MODAL
   ============================================================ */
(function initSurprise() {
  const btn = document.getElementById('btnSurprise');
  if (!btn) return;
  let opened = false;

  btn.addEventListener('click', () => {
    if (opened) return;
    opened = true;

    setTimeout(() => {
      const modal = document.createElement('div');
      modal.className = 'surprise-modal';
      modal.innerHTML = `
        <div class="modal-content">
          <p class="modal-eyebrow">SATU HAL LAGI</p>
          <h2>Hijri,</h2>
          <p>Dari 17 Desember 2025 sampai sekarang,
dan sampai kapanpun —

Mas masih pilih kamu.

Makasih ya udah ada. 🤍</p>
          <button id="tutupModal">Mas juga sayang kamu</button>
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('#tutupModal').addEventListener('click', () => {
        modal.classList.add('fade-out');
        setTimeout(() => modal.remove(), 500);
        opened = false;
      });
    }, 400);
  });
})();

/* ============================================================
   TOMBOL NGAMBEK
   ============================================================ */
(function initNgambek() {
  const btn = document.getElementById('btnNgambek');
  if (!btn) return;
  let count = 0;

  btn.addEventListener('click', () => {
    count++;
    const pesan = NGAMBEK_PESAN[Math.floor(Math.random() * NGAMBEK_PESAN.length)];
    tampilkanNotif(pesan);

    if (count >= 5) {
      btn.textContent = 'Yaudah mas gak ngambek lagi 🥺';
      btn.disabled = true;
      btn.style.opacity = '0.6';
    }
  });
})();

/* ============================================================
   POPUP JAIL
   ============================================================ */
(function initPopup() {
  const container = document.getElementById('popupContainer');
  if (!container) return;

  function munculkan() {
    if (document.hidden) return;
    const popup = document.createElement('div');
    popup.className = 'popup-jail';
    popup.innerHTML = `
      <p>${POPUP_PESAN[Math.floor(Math.random() * POPUP_PESAN.length)]}</p>
      <button>Iya, Mas juga 💕</button>
    `;
    popup.querySelector('button').addEventListener('click', () => {
      popup.style.transition = 'opacity 0.3s, transform 0.3s';
      popup.style.opacity = '0';
      popup.style.transform = 'translateY(20px)';
      setTimeout(() => popup.remove(), 300);
    });
    container.appendChild(popup);
    setTimeout(() => {
      popup.style.transition = 'opacity 0.3s, transform 0.3s';
      popup.style.opacity = '0';
      popup.style.transform = 'translateY(20px)';
      setTimeout(() => popup.remove(), 300);
    }, 9000);
  }

  setTimeout(munculkan, 15000);
  setInterval(munculkan, 45000);
})();

/* ============================================================
   WARNING KELUAR
   ============================================================ */
(function initWarnLeave() {
  let triggered = false;
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY > 0) return;
    if (triggered) return;
    triggered = true;
    tampilkanNotif('Eh, mau kemana? Mas masih di sini loh 🥺');
    setTimeout(() => { triggered = false; }, 15000);
  });
})();

/* ============================================================
   SPAM NOTIF
   ============================================================ */
(function initSpamNotif() {
  let index = 0;
  setInterval(() => {
    if (document.hidden) return;
    if (index >= SPAM_NOTIF.length) index = 0;
    if (Math.random() < 0.5) {
      tampilkanNotif(SPAM_NOTIF[index]);
      index++;
    }
  }, 90000);
})();

/* ============================================================
   THEME
   ============================================================ */
(function initTheme() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
})();

/* ============================================================
   HELPER
   ============================================================ */
function tampilkanNotif(pesan) {
  const notifs = document.querySelectorAll('.notif');
  if (notifs.length >= 3) notifs[0].remove();
  const notif = document.createElement('div');
  notif.className = 'notif';
  notif.textContent = pesan;
  document.body.appendChild(notif);
  setTimeout(() => {
    notif.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    notif.style.opacity = '0';
    notif.style.transform = 'translateY(20px)';
    setTimeout(() => notif.remove(), 400);
  }, 3500);
}