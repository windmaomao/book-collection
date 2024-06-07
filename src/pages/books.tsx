import DefaultLayout from '@/layouts/default';
import { title } from '@/components/primitives';
import { Books } from '@/components/books';

export default function BooksPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Books</h1>
        </div>
        <Books />
      </section>
    </DefaultLayout>
  );
}
