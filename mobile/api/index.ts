/**
 * Portfolio UI Demo Mock API Adapter for Mobile Showcase.
 * Returns static in-memory sample data with zero backend dependency.
 */

const DEMO_MOBILE_USER = {
  id: 2,
  first_name: 'Maria',
  last_name: 'Santos',
  email: 'maria.santos@ccc.edu.ph',
  student_id: 'CCC-2026-0001',
  role: 'STUDENT',
  year_level: '3rd Year',
  program: { id: 1, code: 'BSCS', name: 'Computer Science' },
  qr_code: 'QR-DEMO-STUDENT-0001',
  created_at: '2026-04-12T08:00:00.000Z',
  stats: { borrowed: 1, visits: 12, streak: 4 },
  penalty_balance: '15.00',
};

const DEMO_BOOKS = [
  { id: 1, title: 'Fundamentals of Database Systems', author: 'Ramez Elmasri', isbn: '978-0133970777', genre: 'Computer Science', available_copies: 4, total_copies: 5, shelf_location: 'CS-A1' },
  { id: 2, title: 'Clean Code', author: 'Robert C. Martin', isbn: '978-0132350884', genre: 'Software Engineering', available_copies: 3, total_copies: 4, shelf_location: 'CS-A2' },
  { id: 3, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', isbn: '978-0262046305', genre: 'Computer Science', available_copies: 2, total_copies: 3, shelf_location: 'CS-B1', library_use_only: true },
];

const DEMO_ANNOUNCEMENTS = [
  { id: 1, title: 'Midterm Extended Hours', body: 'Library is open until 7:00 PM this week.', priority: 'HIGH', created_at: new Date().toISOString() },
];

const DEMO_ATTENDANCE = [
  { id: 1, action: 'CHECK_IN', logged_at: new Date(Date.now() - 3600000).toISOString() },
  { id: 2, action: 'CHECK_OUT', logged_at: new Date(Date.now() - 86400000).toISOString() },
];

const DEMO_BORROWS = [
  { id: 101, book: DEMO_BOOKS[0], borrow_date: new Date(Date.now() - 10 * 86400000).toISOString(), due_date: new Date(Date.now() - 3 * 86400000).toISOString(), status: 'OVERDUE' },
  { id: 104, book: DEMO_BOOKS[1], borrow_date: new Date(Date.now() - 14 * 86400000).toISOString(), due_date: new Date(Date.now() - 7 * 86400000).toISOString(), return_date: new Date(Date.now() - 6 * 86400000).toISOString(), status: 'RETURNED' },
];

const DEMO_PENALTIES = {
  totalUnpaid: 15,
  penalties: [
    { id: 201, amount: 15, days_overdue: 3, status: 'UNPAID', type: 'OVERDUE', book_title: 'Fundamentals of Database Systems' },
  ],
};

function resolveGet(url: string) {
  if (url.includes('/auth/me')) return { user: DEMO_MOBILE_USER };
  if (url.includes('/settings/programs')) return [{ id: 1, code: 'BSCS', name: 'Computer Science' }, { id: 2, code: 'BSIT', name: 'Information Technology' }, { id: 3, code: 'BSED', name: 'Education' }, { id: 4, code: 'BSBA', name: 'Business Administration' }];
  if (url.includes('/announcements/active')) return DEMO_ANNOUNCEMENTS;
  if (url.includes('/literatures/books')) return DEMO_BOOKS;
  if (url.includes('/attendance/my-history')) return DEMO_ATTENDANCE;
  if (url.includes('/borrowing/user/') && url.includes('/penalties')) return DEMO_PENALTIES;
  if (url.includes('/borrowing/user/')) return DEMO_BORROWS;
  return [];
}

const mockApi = {
  get: async <T = any>(url: string) => ({ data: resolveGet(url) as T }),
  post: async <T = any>(url: string, body?: any) => {
    if (url.includes('/auth/login') || url.includes('/auth/register')) {
      return { data: { token: 'demo-mobile-token', user: DEMO_MOBILE_USER } as T };
    }
    return { data: { success: true, ...body } as T };
  },
  put: async <T = any>(_url: string, body?: any) => ({
    data: { user: { ...DEMO_MOBILE_USER, ...body }, message: 'Demo mode updated.' } as T,
  }),
  patch: async <T = any>(_url: string, body?: any) => ({ data: { success: true, ...body } as T }),
  delete: async <T = any>(_url: string) => ({ data: { success: true } as T }),
};

export default mockApi;
