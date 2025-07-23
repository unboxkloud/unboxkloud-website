export function ProjectCard({ number, title, skills }) {
  return (
    <div className="relative">
      {/* Project Number Tag */}
      <div className="absolute -top-3 left-6 z-10">
        <div className="bg-[#ff6600] text-white px-6 py-2 rounded-full text-lg font-medium">Project {number}</div>
      </div>

      {/* Main Card */}
      <div className="rounded-[32px] bg-[#fff0e6] border-2 border-[#ff6600] pt-8">
        {/* Gray Content Area */}
        <div className="relative mx-6 mb-6 bg-[#f5f5f5] rounded-2xl p-6">
          {/* Placeholder Image Area */}
          <div className="aspect-[16/9] bg-[#e5e5e5] rounded-lg flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

          {/* Web Development Tag */}
          <div className="inline-block px-6 py-2 rounded-full border border-[#ff6600] text-[#ff6600] text-base font-medium">
            Web Development
          </div>
        </div>

        {/* Bottom Content */}
        <div className="px-8 pb-8">
          <h3 className="text-[#363258] text-[32px] font-bold leading-tight mb-4">{title}</h3>
          <p className="text-[#363258]/80 text-lg leading-relaxed">{skills}</p>
        </div>
      </div>
    </div>
  )
}

