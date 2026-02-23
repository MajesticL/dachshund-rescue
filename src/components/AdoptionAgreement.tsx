'use client'

import { useState } from 'react'

interface Props {
  onContinue: () => void
}

export default function AdoptionAgreement({ onContinue }: Props) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className="border rounded-lg p-6 space-y-4 bg-gray-50">
        <h2 className="text-xl font-semibold">Before You Apply</h2>

        <div className="text-sm text-gray-700 space-y-2">
            <p>
                Thank you for considering adoption from Dachshund Seeking Forever Home!
            </p>

            <p>
                Before completing an application, please know that we receive many applicants for our adoptable dogs and work to make the best possible match for both dachshund and pet parent. This process may take some time as we read through each application, so your patience is appreciated.
            </p>

            <p>
                If we do not currently have an adoptable dog that is a match to your application information, we will keep your application on file and contact you when a more suitable dog becomes available.
            </p>

            <p>
                DSFH has a sizeable waitlist for younger dachshunds (5 years old and under), so it may take longer if you prefer a younger dog. Please note, the majority of our animals come from owner surrender, animal control shelters, and other rescues, so DSFH rarely receives puppies.
            </p>
            
        </div>

        <label className="flex items-center space-x-2">
            <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            />
            <span>Yes - I would like to apply.</span>
        </label>

        <button
            disabled={!isChecked}
            onClick={onContinue}
            className={`px-4 py-2 rounded ${
            isChecked
                ? 'bg-blue-600 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
            Continue to Application
        </button>
    </div>
  )
}