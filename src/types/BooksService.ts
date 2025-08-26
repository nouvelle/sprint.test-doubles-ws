export interface BooksService {
  borrowBook(userId: string, bookId: string): void;
}
