import { useState } from 'react'

interface SecuritySetting {
  id: string
  name: string
  description: string
  enabled: boolean
}

const initialSettings: SecuritySetting[] = [
  { id: "2fa", name: "Two-Factor Authentication", description: "Require 2FA for all user logins", enabled: true },
  { id: "ssl", name: "Force SSL", description: "Enforce SSL for all connections", enabled: true },
  { id: "ip_whitelist", name: "IP Whitelist", description: "Only allow connections from approved IP addresses", enabled: false },
  { id: "password_policy", name: "Strong Password Policy", description: "Enforce complex password requirements", enabled: true },
]

export default function SecuritySettings() {
  const [settings, setSettings] = useState<SecuritySetting[]>(initialSettings)

  const toggleSetting = (id: string) => {
    setSettings(settings.map(setting => 
      setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
    ))
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Security Settings</h2>
      <div className="space-y-4">
        {settings.map((setting) => (
          <div key={setting.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <div>
              <h3 className="text-lg font-semibold">{setting.name}</h3>
              <p className="text-gray-600">{setting.description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={setting.enabled}
                onChange={() => toggleSetting(setting.id)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

