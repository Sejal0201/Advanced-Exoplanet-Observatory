interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}: PaginationProps) {
  return (
    <div className="mt-6 flex items-center justify-between">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="rounded-lg border border-slate-700 px-4 py-2 disabled:opacity-40"
      >
        Previous
      </button>

      <p className="text-slate-400">
        Page {currentPage} of {totalPages}
      </p>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-slate-700 px-4 py-2 disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}