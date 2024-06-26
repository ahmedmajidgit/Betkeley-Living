"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebaseConfig/firebaseConfig';
import axios from "axios";

function CreateModal({ openCreateModal, showCreateModal }:{
    openCreateModal: () => void;
    showCreateModal: boolean;
  }) {
  const [values, setValues] = useState({
    name: "",
      address: "",
      type: "",
      bedrooms: "",
      washrooms: "",
      area:"",
      amount: "",
      // images: [],
    });
    const [files, setFiles] = useState<FileList | null>(null);
    const [urls, setUrls] = useState<string[]>([]);

  const handleChange = (fieldName: string,) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [fieldName]: event.target.value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleUpload = async () => {
    if (!files) return;

    const promises: Promise<void>[] = [];
    const urlsArray: string[] = [];

    Array.from(files).forEach(file => {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytes(storageRef, file).then(snapshot => {
        return getDownloadURL(snapshot.ref).then(url => {
          urlsArray.push(url+"?alt=media");
        });
      });
      promises.push(uploadTask);
    });

    await Promise.all(promises);
    setUrls(urlsArray);
    return urlsArray
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Upload files if they are not already uploaded
    let data = await handleUpload();
    // Assuming you have a function to handle the API call to save the property data
    try {
        // const response = await axios.post(api, values);
        // console.log("Submit form with values:", values);
        const response = await axios.post("/api/properties/add", {...values, images: data});
        console.log("API response:", response.data);
        openCreateModal()
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};
  return (
    <>
    <div className={`modal ${showCreateModal ? 'show' : ''}`}>
      <div className="modal-content">
    <form onSubmit={handleFormSubmit}>
        {/* <div className="card-shadow" style={{marginLeft:"200px", marginRight:"200px", padding:"100px"}}> */}
            <h2 className="text-2xl font-semibold mb-4">Create Property</h2>
            {/* Picture Upload */}
            <div className="mb-4">
                <label htmlFor="pictures" className="block mb-1">Upload Pictures</label>
                <input
                type="file"
                id="pictures"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                />
                <div>
                </div>
            </div>

            {/* Property Details */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                <label htmlFor="propertyTitle" className="block mb-1">Property Title</label>
                <input
                    type="text"
                    id="name"
                    value={values.name}
                    onChange={handleChange('name')}
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                </div>
                <div>
                <label htmlFor="propertyLocation" className="block mb-1">Property Location</label>
                <input
                    type="text"
                    id="address"
                    value={values.address}
                    onChange={handleChange('address')}
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                </div>
                <div>
                <label htmlFor="propertyType" className="block mb-1">Property Type</label>
                <input
                    type="text"
                    id="type"
                    value={values.type}
                    onChange={handleChange('type')}
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                </div>
                <div>
                <label htmlFor="numRooms" className="block mb-1">Number of Rooms</label>
                <input
                    type="number"
                    id="bedrooms"
                    value={values.bedrooms}
                    onChange={handleChange('bedrooms')}
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                </div>
                <div>
                <label htmlFor="numBathrooms" className="block mb-1">Number of Bathrooms</label>
                <input
                    type="number"
                    id="washrooms"
                    value={values.washrooms}
                    onChange={handleChange('washrooms')}
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                </div>
                <div>
                <label htmlFor="area" className="block mb-1">Area (sq.ft)</label>
                <input
                    type="number"
                    id="area"
                    value={values.area}
                    onChange={handleChange('area')}
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                </div>
                <div>
                <label htmlFor="price" className="block mb-1">Price</label>
                <input
                    type="text"
                    id="amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => openCreateModal()}>Close</button>
            </div>
            </form>
        </div>
        </div>
    </>
  );
}

export default CreateModal;
