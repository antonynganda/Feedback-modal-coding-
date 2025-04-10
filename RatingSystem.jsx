import React, { useState } from "react"; import { Dialog } from "@headlessui/react"; import { Button } from "@/components/ui/button";

export default function FeedbackModal() { // State to track whether the modal is open const [isOpen, setIsOpen] = useState(false); // State to track the selected rating const [rating, setRating] = useState(null);

// Function to handle form submission const handleSubmit = () => { if (rating !== null) { console.log("Submitted rating:", rating); // For now, just log the rating setIsOpen(false); // Close the modal setRating(null); // Reset the rating state } };

return ( // Center the button on the screen <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4"> {/* Trigger button to open modal */} <Button onClick={() => setIsOpen(true)} className="px-6 py-3 text-lg"> Give Feedback </Button>

{/* Modal dialog from Headless UI */}
  <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
    {/* Dark overlay background */}
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" onClick={() => setIsOpen(false)} />

    {/* Modal panel centered on screen */}
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6">
        {/* Modal title */}
        <Dialog.Title className="text-xl font-bold mb-4 text-center">Rate Your Experience</Dialog.Title>

        {/* Rating buttons from 1 to 10 */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {[...Array(10)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setRating(i + 1)}
              className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-200 hover:bg-blue-100 ${
                rating === i + 1 ? "bg-blue-500 text-white" : "bg-white text-gray-800"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={rating === null}>
            Submit
          </Button>
        </div>
      </Dialog.Panel>
    </div>
  </Dialog>
</div>

); }

          
