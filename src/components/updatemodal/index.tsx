"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebaseConfig/firebaseConfig';
import axios from "axios";

function UpdateModal({ openUpdateModal, showUpdateModal }:{
    openUpdateModal: () => void;
    showUpdateModal: boolean;
  }) {

  return (
    <>
    <div className={`modal ${showUpdateModal ? 'show' : ''}`}>
      <div className="modal-content">
    <form 
    // onSubmit={handleFormSubmit}
    >
            <h2 className="text-2xl font-semibold mb-4">Update Property</h2>
            {/* Picture Upload */}
            <div className="mb-4">
                <label htmlFor="pictures" className="block mb-1">Upload Pictures</label>
                <input
                type="file"
                id="pictures"
                multiple
                accept="image/*"
                // onChange={handleFileChange}
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
                    // value={values.name}
                    // onChange={handleChange('name')}
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                </div>
                <div>
                <label htmlFor="propertyLocation" className="block mb-1">Property Location</label>
                <input
                    type="text"
                    id="address"
                    // value={values.address}
                    // onChange={handleChange('address')}
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                </div>
                <div>
                <label htmlFor="propertyType" className="block mb-1">Property Type</label>
                <input
                    type="text"
                    id="type"
                    // value={values.type}
                    // onChange={handleChange('type')}
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                </div>
                <div>
                <label htmlFor="numRooms" className="block mb-1">Number of Rooms</label>
                <input
                    type="number"
                    id="bedrooms"
                    // value={values.bedrooms}
                    // onChange={handleChange('bedrooms')}
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                </div>
                <div>
                <label htmlFor="numBathrooms" className="block mb-1">Number of Bathrooms</label>
                <input
                    type="number"
                    id="washrooms"
                    // value={values.washrooms}
                    // onChange={handleChange('washrooms')}
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                </div>
                <div>
                <label htmlFor="area" className="block mb-1">Area (sq.ft)</label>
                <input
                    type="number"
                    id="area"
                    // value={values.area}
                    // onChange={handleChange('area')}
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                </div>
                <div>
                <label htmlFor="price" className="block mb-1">Price</label>
                <input
                    type="text"
                    id="amount"
                    // value={values.amount}
                    // onChange={handleChange('amount')}
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => openUpdateModal()}>Close</button>
            </div>
            </form>
        </div>
        </div>
    </>
  );
}

export default UpdateModal;
