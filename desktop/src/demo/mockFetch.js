/**
 * Portfolio UI Demo Mock Layer
 * Intercepts `/api/*` fetch requests in-memory so the entire Desktop UI
 * works interactively without any backend server or database.
 */

const DEMO_USER = {
  id: 1,
  first_name: 'Jane',
  last_name: 'Librarian',
  email: 'librarian@ccc.edu.ph',
  student_id: 'LIB-001',
  role: 'ADMIN',
  status: 'ACTIVE',
  qr_code: 'QR-DEMO-ADMIN-LIB001',
};

let demoRules = {
  max_books_per_student: 3,
  borrow_duration_days: 7,
  penalty_per_day: 5,
  damage_penalty_fee: 50,
  lost_penalty_fee: 250,
  suspension_threshold: 100,
  grace_period_hours: 24,
  library_name: 'Calauan Community Campus Library',
};

let demoPrograms = [
  { id: 1, code: 'BSCS', name: 'Computer Science' },
  { id: 2, code: 'BSIT', name: 'Information Technology' },
  { id: 3, code: 'BSED', name: 'Education' },
  { id: 4, code: 'BSBA', name: 'Business Administration' },
];

let demoUsers = [
  { id: 1, student_id: 'LIB-001', card_no: 'LIB-001', name: 'Jane Librarian', first_name: 'Jane', last_name: 'Librarian', email: 'librarian@ccc.edu.ph', role: 'ADMIN', program: 'Library Administration', status: 'ACTIVE', penalty: 0, qr_code: 'QR-DEMO-ADMIN-LIB001' },
  { id: 2, student_id: 'CCC-2026-0001', card_no: 'CCC-2026-0001', name: 'Maria Santos', first_name: 'Maria', last_name: 'Santos', email: 'maria.santos@ccc.edu.ph', role: 'STUDENT', program: 'Computer Science', year_level: '3rd Year', status: 'ACTIVE', penalty: 15, qr_code: 'QR-DEMO-STUDENT-0001' },
  { id: 3, student_id: 'CCC-2026-0002', card_no: 'CCC-2026-0002', name: 'Juan Dela Cruz', first_name: 'Juan', last_name: 'Dela Cruz', email: 'juan.delacruz@ccc.edu.ph', role: 'STUDENT', program: 'Information Technology', year_level: '2nd Year', status: 'ACTIVE', penalty: 0, qr_code: 'QR-DEMO-STUDENT-0002' },
  { id: 4, student_id: 'CCC-2026-0003', card_no: 'CCC-2026-0003', name: 'Elena Reyes', first_name: 'Elena', last_name: 'Reyes', email: 'elena.reyes@ccc.edu.ph', role: 'STUDENT', program: 'Education', year_level: '4th Year', status: 'ACTIVE', penalty: 30, qr_code: 'QR-DEMO-STUDENT-0003' },
  { id: 5, student_id: 'VIS-2026-0001', card_no: 'VIS-2026-0001', name: 'Alex Rivera', first_name: 'Alex', last_name: 'Rivera', email: 'alex.rivera@guest.edu', role: 'VISITOR', program: null, year_level: null, status: 'ACTIVE', penalty: 0, qr_code: 'QR-DEMO-VISITOR-0001' },
];

let demoBooks = [
  { id: 1, title: 'Fundamentals of Database Systems', author: 'Ramez Elmasri', isbn: '978-0133970777', lccn: 'QA76.9.D3', genre: 'Computer Science', shelf: 'CS-A1', condition: 'GOOD', total: 5, available: 4, is_special: false, library_use_only: false, custom_penalty_fee: null, qr_code: 'BOOK-DB-001', publication_year: 2021 },
  { id: 2, title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', isbn: '978-0132350884', lccn: 'QA76.76.D47', genre: 'Software Engineering', shelf: 'CS-A2', condition: 'GOOD', total: 4, available: 3, is_special: false, library_use_only: false, custom_penalty_fee: null, qr_code: 'BOOK-CC-002', publication_year: 2020 },
  { id: 3, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', isbn: '978-0262046305', lccn: 'QA76.6', genre: 'Computer Science', shelf: 'CS-B1', condition: 'GOOD', total: 3, available: 2, is_special: true, library_use_only: true, custom_penalty_fee: 10, qr_code: 'BOOK-ALGO-003', publication_year: 2022 },
  { id: 4, title: 'Principles of Teaching and Learning', author: 'Brenda Corpuz', isbn: '978-9716858204', lccn: 'LB1025.3', genre: 'Education', shelf: 'ED-A1', condition: 'FAIR', total: 6, available: 6, is_special: false, library_use_only: false, custom_penalty_fee: null, qr_code: 'BOOK-ED-004', publication_year: 2019 },
  { id: 5, title: 'Financial Accounting & Reporting', author: 'Zeus Millan', isbn: '978-6219501201', lccn: 'HF5636', genre: 'Business', shelf: 'BA-C2', condition: 'GOOD', total: 4, available: 4, is_special: false, library_use_only: false, custom_penalty_fee: null, qr_code: 'BOOK-BA-005', publication_year: 2023 },
];

let demoArchivedBooks = [
  { id: 99, title: 'Legacy Pascal Programming', author: 'Niklaus Wirth', isbn: '978-0136529315', lccn: 'QA76.73.P2', genre: 'Computer Science', shelf: 'ARC-1', condition: 'POOR', total: 1, available: 1, publication_year: 1995, is_archived: true },
];

let demoRecords = [
  { id: 101, book: demoBooks[0], user: demoUsers[1], borrow_date: new Date(Date.now() - 10 * 86400000).toISOString(), due_date: new Date(Date.now() - 3 * 86400000).toISOString(), status: 'OVERDUE', type: 'TAKE_OUT' },
  { id: 102, book: demoBooks[1], user: demoUsers[2], borrow_date: new Date(Date.now() - 2 * 86400000).toISOString(), due_date: new Date(Date.now() + 5 * 86400000).toISOString(), status: 'BORROWED', type: 'TAKE_OUT' },
  { id: 103, book: demoBooks[2], user: demoUsers[4], borrow_date: new Date(Date.now() - 3600000).toISOString(), due_date: new Date(Date.now() + 7200000).toISOString(), status: 'BORROWED', type: 'READ_IN_LIBRARY' },
  { id: 104, book: demoBooks[3], user: demoUsers[3], borrow_date: new Date(Date.now() - 14 * 86400000).toISOString(), due_date: new Date(Date.now() - 7 * 86400000).toISOString(), return_date: new Date(Date.now() - 6 * 86400000).toISOString(), status: 'RETURNED', type: 'TAKE_OUT' },
];

let demoPenalties = [
  {
    id: 201,
    user_id: 2,
    user: demoUsers[1],
    borrow: demoRecords[0],
    type: 'OVERDUE',
    days_overdue: 3,
    amount: 15,
    daily_rate: 5,
    status: 'UNPAID',
    is_returned: false,
    created_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 202,
    user_id: 4,
    user: demoUsers[3],
    borrow: demoRecords[3],
    type: 'OVERDUE',
    days_overdue: 6,
    amount: 30,
    daily_rate: 5,
    status: 'PAID',
    receipt_number: 'CCC-OR-2026-00202',
    paid_at: new Date(Date.now() - 5 * 86400000).toISOString(),
    created_at: new Date(Date.now() - 6 * 86400000).toISOString(),
    collector: DEMO_USER,
  },
];

let demoActiveUsers = [
  { id: 2, first_name: 'Maria', last_name: 'Santos', student_id: 'CCC-2026-0001', department: 'Computer Science', year_level: '3rd Year', checked_in_at: new Date(Date.now() - 42 * 60000).toISOString() },
  { id: 5, first_name: 'Alex', last_name: 'Rivera', student_id: 'VIS-2026-0001', department: 'Visitor Pass', year_level: '', checked_in_at: new Date(Date.now() - 18 * 60000).toISOString() },
];

let demoAnnouncements = [
  { id: 1, title: 'Midterm Extended Hours', body: 'The Calauan Community Campus Library is open until 7:00 PM this week.', priority: 'HIGH', is_active: true, created_at: new Date().toISOString() },
  { id: 2, title: 'QR Pass Reminder', body: 'Please scan your official mobile QR pass at the entrance desk for attendance.', priority: 'NORMAL', is_active: true, created_at: new Date(Date.now() - 86400000).toISOString() },
];

let demoNotifications = [
  { id: 1, type: 'OVERDUE', title: 'Overdue Notice', message: 'Maria Santos has 1 overdue book (3 days overdue).', is_read: false, created_at: new Date(Date.now() - 1800000).toISOString(), trigger_user: demoUsers[1] },
  { id: 2, type: 'RETURN', title: 'Book Returned', message: 'Elena Reyes returned Principles of Teaching and Learning.', is_read: true, created_at: new Date(Date.now() - 86400000).toISOString(), trigger_user: demoUsers[3] },
];

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function buildAuthors() {
  const map = new Map();
  for (const b of demoBooks) {
    const cur = map.get(b.author) || { id: map.size + 1, name: b.author, books: 0, copies: 0, expanded: false };
    cur.books += 1;
    cur.copies += b.total;
    map.set(b.author, cur);
  }
  return Array.from(map.values());
}

function buildGenres() {
  const colors = [
    { color: 'bg-purple-500', colorBg: 'bg-purple-50', colorText: 'text-purple-700' },
    { color: 'bg-blue-500', colorBg: 'bg-blue-50', colorText: 'text-blue-700' },
    { color: 'bg-emerald-500', colorBg: 'bg-emerald-50', colorText: 'text-emerald-700' },
    { color: 'bg-amber-500', colorBg: 'bg-amber-50', colorText: 'text-amber-700' },
  ];
  const map = new Map();
  for (const b of demoBooks) {
    const idx = map.size % colors.length;
    const cur = map.get(b.genre) || { id: map.size + 1, name: b.genre, books: 0, copies: 0, expanded: false, ...colors[idx] };
    cur.books += 1;
    cur.copies += b.total;
    map.set(b.genre, cur);
  }
  return Array.from(map.values());
}

function buildReportsData() {
  return {
    kpis: {
      totalBooks: demoBooks.reduce((s, b) => s + b.total, 0),
      uniqueTitles: demoBooks.length,
      totalBorrows: demoRecords.length + 38,
      activeBorrows: demoRecords.filter(r => r.status !== 'RETURNED').length,
      overdueCount: demoRecords.filter(r => r.status === 'OVERDUE').length,
      totalVisits: 142,
      totalPenaltiesCollected: 485,
      unpaidPenalties: 15,
    },
    trendAnalysis: [
      { date: 'Mon', borrows: 12, visits: 24 },
      { date: 'Tue', borrows: 19, visits: 31 },
      { date: 'Wed', borrows: 15, visits: 28 },
      { date: 'Thu', borrows: 22, visits: 35 },
      { date: 'Fri', borrows: 17, visits: 24 },
    ],
    visitsByProgram: [
      { name: 'Computer Science', value: 52 },
      { name: 'Information Technology', value: 44 },
      { name: 'Education', value: 28 },
      { name: 'Business Administration', value: 18 },
    ],
    popularGenres: [
      { name: 'Computer Science', value: 21 },
      { name: 'Software Engineering', value: 14 },
      { name: 'Education', value: 11 },
      { name: 'Business', value: 8 },
    ],
    topBorrowedBooks: demoBooks.slice(0, 5).map((b, i) => ({ title: b.title, author: b.author, count: 18 - i * 3 })),
    frequentVisitors: demoUsers.slice(1, 5).map((u, i) => ({ name: u.name, student_id: u.student_id, program: u.program || 'Visitor Pass', visits: 19 - i * 3 })),
    recentTransactions: demoRecords,
    penalties: demoPenalties,
  };
}

if (typeof window !== 'undefined' && !window.__LIBLOG_DEMO_INSTALLED__) {
  window.__LIBLOG_DEMO_INSTALLED__ = true;
  const originalFetch = window.fetch.bind(window);

  window.fetch = async (input, options = {}) => {
    const urlStr = typeof input === 'string' ? input : input?.url || '';
    if (!urlStr.includes('/api/')) {
      return originalFetch(input, options);
    }

    const url = new URL(urlStr, window.location.origin);
    const path = url.pathname.replace(/^.*\/api/, '');
    const method = (options.method || 'GET').toUpperCase();
    let body = {};
    if (typeof options.body === 'string') {
      try { body = JSON.parse(options.body); } catch { body = {}; }
    }

    // Auth
    if (path === '/auth/login' && method === 'POST') {
      return jsonResponse({ token: 'demo-portfolio-token', user: DEMO_USER });
    }
    if (path === '/auth/me' && method === 'GET') {
      return jsonResponse({ user: DEMO_USER });
    }
    if (path === '/auth/me' && method === 'PUT') {
      Object.assign(DEMO_USER, body);
      return jsonResponse({ user: DEMO_USER, message: 'Demo profile updated.' });
    }
    if (path === '/auth/change-password' && method === 'PUT') {
      return jsonResponse({ message: 'Demo password updated.' });
    }

    // Dashboard
    if (path === '/dashboard/overview') {
      return jsonResponse({
        totalTitles: demoBooks.length,
        totalCopies: demoBooks.reduce((s, b) => s + b.total, 0),
        activeBorrows: demoRecords.filter(r => r.status !== 'RETURNED').length,
        overdueCount: demoRecords.filter(r => r.status === 'OVERDUE').length,
        insideNow: demoActiveUsers.length,
        todayVisits: 28,
        occupancyRate: 36,
        topVisitors: demoUsers.slice(1, 5).map((u, i) => ({ name: u.name, student_id: u.student_id, program: u.program || 'Visitor Pass', visits: 18 - i * 3 })),
        recentActivity: [
          { id: 1, type: 'CHECK_IN', user: 'Alex Rivera', detail: 'Checked in (Visitor Pass)', time: '18 mins ago' },
          { id: 2, type: 'BORROW', user: 'Juan Dela Cruz', detail: 'Borrowed Clean Code', time: '2 hours ago' },
          { id: 3, type: 'CHECK_IN', user: 'Maria Santos', detail: 'Checked in', time: '42 mins ago' },
        ],
        occupancyTrend: [
          { hour: '8 AM', count: 8 },
          { hour: '10 AM', count: 19 },
          { hour: '12 PM', count: 14 },
          { hour: '2 PM', count: 24 },
          { hour: '4 PM', count: 12 },
        ],
      });
    }
    if (path === '/dashboard/full-log') {
      return jsonResponse(demoRecords.map(r => ({
        id: r.id,
        action: r.status,
        user: `${r.user.first_name} ${r.user.last_name}`,
        detail: r.book.title,
        timestamp: r.borrow_date,
      })));
    }

    // Attendance
    if (path === '/attendance/stats') {
      return jsonResponse({
        checkIns: 28,
        checkOuts: 26,
        insideNow: demoActiveUsers.length,
        avgDuration: 47,
        heatmapCounts: Array.from({ length: 5 }, (_, d) => Array.from({ length: 12 }, (_, h) => ((d + h) % 6) + 1)),
        activeUsers: demoActiveUsers,
      });
    }
    if (path === '/attendance/active') {
      return jsonResponse(demoActiveUsers);
    }
    if (path === '/attendance/scan' && method === 'POST') {
      const target = demoUsers.find(u => u.qr_code === body.identifier || (body.source === 'manual' && u.student_id === body.identifier)) || demoUsers[1];
      const exists = demoActiveUsers.some(u => u.id === target.id);
      if (exists) {
        demoActiveUsers = demoActiveUsers.filter(u => u.id !== target.id);
        return jsonResponse({ action: 'CHECK_OUT', user: target, duration: 35 });
      }
      demoActiveUsers = [{ ...target, department: target.program || 'Visitor Pass', checked_in_at: new Date().toISOString() }, ...demoActiveUsers];
      return jsonResponse({ action: 'CHECK_IN', user: target });
    }

    // Borrowing
    if (path === '/borrowing/stats') {
      return jsonResponse({
        active: demoRecords.filter(r => r.status === 'BORROWED').length,
        overdue: demoRecords.filter(r => r.status === 'OVERDUE').length,
        returned: demoRecords.filter(r => r.status === 'RETURNED').length,
      });
    }
    if (path === '/borrowing/records') {
      return jsonResponse(demoRecords);
    }
    if (path === '/borrowing/penalties') {
      const status = url.searchParams.get('status') || 'UNPAID';
      return jsonResponse(status === 'ALL' ? demoPenalties : demoPenalties.filter(p => p.status === status));
    }
    if (path.startsWith('/borrowing/validate-book/')) {
      const id = decodeURIComponent(path.split('/').pop());
      const book = demoBooks.find(b => b.isbn === id || b.qr_code === id) || demoBooks[0];
      return jsonResponse(book);
    }
    if (path.startsWith('/borrowing/validate-user/')) {
      const id = decodeURIComponent(path.split('/').pop());
      const user = demoUsers.find(u => u.qr_code === id || u.student_id === id) || demoUsers[1];
      return jsonResponse(user);
    }
    if (path.startsWith('/borrowing/penalties/') && path.endsWith('/pay') && method === 'POST') {
      const pid = Number(path.split('/')[3]);
      demoPenalties = demoPenalties.map(p => p.id === pid ? { ...p, status: 'PAID', paid_at: new Date().toISOString(), receipt_number: `CCC-OR-2026-00${pid}`, collector: DEMO_USER } : p);
      return jsonResponse({ success: true, penalty: demoPenalties.find(p => p.id === pid) });
    }
    if (path.includes('/send-email') || path.includes('/resend-receipt') || path === '/borrowing/check-overdue') {
      return jsonResponse({ success: true, message: 'Demo mode: action simulated.' });
    }

    // Literatures
    if (path === '/literatures/books' && method === 'GET') return jsonResponse(demoBooks);
    if (path === '/literatures/books' && method === 'POST') {
      const created = { id: Date.now(), ...body, available: Number(body.total || 1), total: Number(body.total || 1), qr_code: `BOOK-DEMO-${Date.now()}` };
      demoBooks = [created, ...demoBooks];
      return jsonResponse(created, 201);
    }
    if (path.startsWith('/literatures/books/') && method === 'PUT') {
      const bid = Number(path.split('/')[3]);
      demoBooks = demoBooks.map(b => b.id === bid ? { ...b, ...body } : b);
      return jsonResponse(demoBooks.find(b => b.id === bid));
    }
    if (path.startsWith('/literatures/books/') && (method === 'DELETE' || path.endsWith('/archive'))) {
      const bid = Number(path.split('/')[3]);
      const found = demoBooks.find(b => b.id === bid);
      if (found) {
        demoBooks = demoBooks.filter(b => b.id !== bid);
        demoArchivedBooks = [{ ...found, is_archived: true }, ...demoArchivedBooks];
      }
      return jsonResponse({ success: true });
    }
    if (path === '/literatures/archived') return jsonResponse(demoArchivedBooks);
    if (path === '/literatures/authors') return jsonResponse(buildAuthors());
    if (path === '/literatures/genres') return jsonResponse(buildGenres());

    // Reports
    if (path === '/reports/summary' || path === '/reports/full') {
      return jsonResponse(buildReportsData());
    }

    // Notifications
    if (path === '/notifications') return jsonResponse(demoNotifications);
    if (path === '/notifications/read-all') {
      demoNotifications = demoNotifications.map(n => ({ ...n, is_read: true }));
      return jsonResponse({ success: true });
    }
    if (path === '/notifications/clear') {
      demoNotifications = [];
      return jsonResponse({ success: true });
    }

    // Student Activities
    if (path === '/student-activities/students') {
      return jsonResponse(demoUsers.slice(1).map(u => ({
        ...u,
        totalBorrows: 4,
        totalVisits: 12,
        unpaidPenalties: u.penalty,
      })));
    }
    if (path.startsWith('/student-activities/students/')) {
      const uid = Number(path.split('/').pop());
      const u = demoUsers.find(x => x.id === uid) || demoUsers[1];
      return jsonResponse({
        profile: u,
        stats: { totalBorrows: 4, activeBorrows: 1, overdueCount: 1, totalVisits: 12, totalPenalties: u.penalty },
        borrows: demoRecords.filter(r => r.user.id === u.id),
        attendance: [{ id: 1, action: 'CHECK_IN', logged_at: new Date().toISOString() }],
        penalties: demoPenalties.filter(p => p.user_id === u.id),
      });
    }

    // Settings
    if (path === '/settings/stats') {
      return jsonResponse({ totalUsers: demoUsers.length, activePrograms: demoPrograms.length, activeAnnouncements: demoAnnouncements.length, ...demoRules });
    }
    if (path === '/settings/library-rules' && method === 'GET') return jsonResponse(demoRules);
    if (path === '/settings/library-rules' && method === 'PUT') {
      demoRules = { ...demoRules, ...body };
      return jsonResponse(demoRules);
    }
    if (path === '/settings/users') return jsonResponse(demoUsers);
    if (path.startsWith('/settings/users/') && path.endsWith('/role') && method === 'PUT') {
      const uid = Number(path.split('/')[3]);
      demoUsers = demoUsers.map(u => u.id === uid ? { ...u, role: body.role } : u);
      return jsonResponse({ success: true, role: body.role });
    }
    if (path === '/settings/announcements' && method === 'GET') return jsonResponse(demoAnnouncements);
    if (path === '/settings/announcements' && method === 'POST') {
      const item = { id: Date.now(), ...body, created_at: new Date().toISOString() };
      demoAnnouncements = [item, ...demoAnnouncements];
      return jsonResponse(item, 201);
    }
    if (path.startsWith('/settings/announcements/') && method === 'DELETE') {
      const aid = Number(path.split('/').pop());
      demoAnnouncements = demoAnnouncements.filter(a => a.id !== aid);
      return jsonResponse({ success: true });
    }
    if (path === '/settings/programs' && method === 'GET') return jsonResponse(demoPrograms);
    if (path === '/settings/programs' && method === 'POST') {
      const p = { id: Date.now(), ...body };
      demoPrograms = [...demoPrograms, p];
      return jsonResponse(p, 201);
    }

    return jsonResponse({ success: true });
  };
}
