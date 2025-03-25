// import React from "react";
// import { IconX } from "@tabler/icons-react";

// interface DeleteModalProps {
//   isOpen: boolean;
//   title: string;
//   onClose: () => void;
//   onConfirm: () => void;
// }

// const DeleteModal: React.FC<DeleteModalProps> = ({
//   isOpen,
//   onClose,
//   onConfirm,
//   title,
// }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-[400px] relative">
//         {/* Header with Title and Close Button */}
//         <div className="flex justify-between items-center mb-3">
//           <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
//             Confirm Deletion
//           </h2>
//           <button
//             onClick={onClose}
//             className="p-1 rounded-full bg-red-200 hover:bg-red-700 text-red-700 hover:text-white transition"
//             aria-label="Close"
//           >
//             <IconX size={20} strokeWidth={2} />
//           </button>
//         </div>

//         {/* Modal Content */}
//         <p className="text-gray-600 dark:text-gray-400 mt-2">
//           Are you sure you want to delete this {title}? This action cannot be
//           undone.
//         </p>

//         {/* Action Buttons */}
//         <div className="flex justify-end mt-4 space-x-2">
//           <button
//             className="px-4 py-2 bg-gray-300 dark:bg-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//           <button
//             className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//             onClick={onConfirm}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeleteModal;

import React from "react";
import { Modal } from "flowbite-react";

interface DeleteModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
}) => {
  return (
    <Modal show={isOpen} onClose={onClose} size="md" popup>
      <Modal.Header className="rounded-t-md pb-4 p-6">
        Confirm Deletion
        {/* <div className="flex justify-between items-center w-full">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">Confirm Deletion</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-red-200 hover:bg-red-700 text-red-700 hover:text-white transition"
            aria-label="Close"
          >
            <IconX size={20} strokeWidth={2} />
          </button>
        </div> */}
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600 dark:text-gray-400">
          Are you sure you want to delete this {title}? This action cannot be
          undone.
        </p>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
