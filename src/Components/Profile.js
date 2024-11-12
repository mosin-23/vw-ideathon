import { useState } from "react";
import React from 'react';

const Profile = () => {
    const [pdata, setPdata] = useState([
        {
            _id: "12345",
            name: "Mosin Khan",
            email: "Mosinkhan5551@example.com",
            mobile: "+1234567890",
            adjust: "90 Degrees"
        },
        {
            _id: "A2345",
            name: "Rian",
            email: "Rian@example.com",
            mobile: "+91852368422",
            adjust: "79 Degrees"
        }
    ]);

    return (
        <div className="flex justify-center items-center min-h-screen cursor-default font-mono">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {pdata.map((profile) => (
                    <div key={profile._id} className="flex flex-col items-center justify-center py-5 border border-2 border-emerald-400 rounded-lg w-fit h-auto shadow-cyan-400 shadow-lg hover:shadow-cyan-500 hover:shadow-sky-600">
                        <img src="https://www.shutterstock.com/image-vector/people-person-icon-modern-flat-600nw-1691909635.jpg" className="w-20 h-auto shadow-md shadow-slate-500 rounded-full hover:shadow-lg hover:shadow-red-600 mb-2" alt="Profile" />
                        <h1 className="px-2 py-2 flex"><span className="text-emerald-700 mr-2">Profile Id:-</span> {profile._id}</h1>
                        <h1 className="px-2 py-2 flex"><span className="text-emerald-700 mr-2">Name:- </span> {profile.name}</h1>
                        <h2 className="px-2 py-2 flex"><span className="text-emerald-700 mr-2">Email :-</span> <span className="font-bold">{profile.email}</span></h2>
                        <h2 className="px-2 py-2 flex"><span className="text-emerald-700 mr-2">Mobile :-</span> {profile.mobile}</h2>
                        <h2 className="px-2 py-2 flex"><span className="text-emerald-700 mr-2">Seat Adjustment :-</span> {profile.adjust}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
