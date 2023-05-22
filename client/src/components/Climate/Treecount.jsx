import React from 'react'

const Treecount = (
  {
    trees,
    carbonFootprint
  }
) => {
  return (
    <div>
      <section class="text-center">
      <h2 class="text-2xl font-bold mb-4">HOW DO YOU COMPARE?</h2>
      <p>
        Here's your annual carbon footprint by household, transportation and
        travel:
      </p>

      <div class="mt-8">
        <div
          class="inline-block border-2 border-gray-300 rounded-full p-8 text-center text-xl"
        >
          Your carbon footprint is equivalent to<br />
          <strong class="text-3xl font-bold">{trees}</strong><br />
          <span class="text-sm">TREES</span>
        </div>
      </div>
    </section>
    
    
    
    </div>
  )
}

export default Treecount