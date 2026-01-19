"use client";

import { useState } from "react";
import { Upload, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/context/ToastContext";
import { useRouter } from "next/navigation";

export default function UploadPrescriptionPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { showToast } = useToast();
  const router = useRouter();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === "application/pdf" || droppedFile.type.startsWith("image/"))) {
      setFile(droppedFile);
      showToast("Prescription uploaded successfully!", "success");
    } else {
      showToast("Please upload a valid PDF or image file", "error");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      showToast("Prescription uploaded successfully!", "success");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      showToast("Please upload a prescription first", "error");
      return;
    }
    showToast("Prescription submitted successfully! Redirecting...", "success");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Upload Prescription</h1>
          <p className="text-gray-600">
            Upload your prescription to order medicines online
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          <div
            className={`border-2 border-dashed rounded-xl p-12 text-center transition ${
              isDragging
                ? "border-primary-600 bg-primary-50"
                : "border-gray-300 hover:border-primary-400"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {!file ? (
              <>
                <Upload className="mx-auto text-gray-400 mb-4" size={64} />
                <h3 className="text-xl font-semibold mb-2">
                  Drag & drop your prescription here
                </h3>
                <p className="text-gray-600 mb-4">or</p>
                <label className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition cursor-pointer">
                  Browse Files
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="text-sm text-gray-500 mt-4">
                  Supported formats: PDF, JPG, PNG (Max 5MB)
                </p>
              </>
            ) : (
              <div className="flex items-center justify-center gap-4">
                <FileText className="text-primary-600" size={48} />
                <div className="text-left">
                  <p className="font-semibold text-lg">{file.name}</p>
                  <p className="text-sm text-gray-600">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <CheckCircle className="text-green-600" size={32} />
              </div>
            )}
          </div>

          {file && (
            <div className="mt-6 space-y-4">
              <button
                type="button"
                onClick={() => setFile(null)}
                className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Upload Different File
              </button>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                Submit Prescription
              </button>
            </div>
          )}

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Important Notes:</h4>
            <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
              <li>Prescription must be valid and signed by a registered doctor</li>
              <li>Clear image or PDF with all details visible</li>
              <li>Doctor's registration number must be visible</li>
              <li>Prescription validity: 30 days from issue date</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
