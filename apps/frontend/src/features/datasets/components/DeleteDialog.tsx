interface DeleteDialogProps {
  open: boolean;
  datasetName: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteDialog({
  open,
  datasetName,
  onCancel,
  onConfirm,
}: DeleteDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8">
        <h2 className="text-2xl font-bold">
          Delete Dataset
        </h2>

        <p className="mt-4 text-slate-400">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-white">
            {datasetName}
          </span>
          ?
        </p>

        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="rounded-xl border border-slate-700 px-5 py-3"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-500 px-5 py-3 font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}