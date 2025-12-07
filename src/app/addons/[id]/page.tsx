import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { addons } from '@/data/products'
import { Check, Gamepad2 } from 'lucide-react'
import AddToCartButton from '@/components/AddToCartButton'

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  return addons.map((addon) => ({ id: addon.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const addon = addons.find((a) => a.id === params.id)
  if (!addon) return { title: 'Not Found' }
  
  return {
    title: `${addon.name} - Godot Multiplayer Engine`,
    description: addon.description,
    keywords: `godot ${addon.category.toLowerCase()}, godot addon, godot multiplayer`,
  }
}

export default function AddonPage({ params }: Props) {
  const addon = addons.find((a) => a.id === params.id)
  
  if (!addon) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary rounded-xl flex items-center justify-center mb-6">
              <Gamepad2 className="w-24 h-24 text-accent/50" />
            </div>
            
            <div className="bg-secondary rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Demo Video</h3>
              <div className="aspect-video bg-primary rounded-lg flex items-center justify-center text-gray-500">
                Video Coming Soon
              </div>
            </div>
          </div>

          <div>
            <span className="text-accent text-sm font-medium uppercase tracking-wider">{addon.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">{addon.name}</h1>
            <p className="text-gray-400 text-lg mb-6">{addon.description}</p>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-accent">₹{addon.price}</span>
              <span className="text-gray-500 text-sm">One-time purchase</span>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <AddToCartButton productId={addon.id} productType="addon" className="w-full text-lg py-4" />
              <a
                href="#"
                className="block w-full text-center px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition-colors"
              >
                Buy Now on Gumroad
              </a>
            </div>

            <div className="bg-secondary rounded-xl p-6 border border-gray-800 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
              <ul className="space-y-3">
                {addon.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-xl p-6 border border-gray-800 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Requirements</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Godot 4.4 or higher</li>
                <li>• GDScript or C# compatible</li>
                <li>• Works on Windows, Mac, Linux, Android, iOS</li>
              </ul>
            </div>

            <div className="bg-secondary rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">What's Included</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Complete source code</li>
                <li>• Demo project</li>
                <li>• Documentation</li>
                <li>• Discord support access</li>
                <li>• Free updates for 1 year</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
