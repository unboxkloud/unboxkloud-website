import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "../lib/utils";
import useWindowSize from "../customHooks/useWindowSize";

const faqData = {
  project: [
    {
      question: "What is UnboxKloud?",
      answer:
        "UnboxKloud is an online platform offering hands-on projects, workshops, and mentorship for aspiring Cloud and DevOps engineers.",
    },
    {
      question: "Who can benefit from UnboxKloud?",
      answer:
        "IT professionals, students, and career changers looking to build practical skills in Cloud and DevOps engineering.",
    },
    {
      question: "What kinds of projects do you offer?",
      answer:
        "We offer real-world projects ranging from basic to expert level, covering AWS, Azure, GCP, Docker, Kubernetes, and more.",
    },
    {
      question: "What are the workshops about?",
      answer:
        "Our workshops cover essential DevOps tools, cloud platforms, and industry best practices with hands-on exercises.",
    },
    {
      question: "Are the projects suitable for beginners?",
      answer:
        "Yes, we have projects for all skill levels, with step-by-step guidance for beginners.",
    },
    {
      question: "Do I need prior IT experience?",
      answer:
        "Basic IT knowledge is helpful, but our beginner tracks start from the fundamentals.",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes, you'll receive certificates upon completing projects and workshops.",
    },
    {
      question: "How does 1:1 mentorship work?",
      answer:
        "You'll be paired with an experienced industry professional for personalized guidance and support.",
    },
    {
      question: "Can I add the projects to my resume?",
      answer:
        "Our projects are designed to be portfolio-worthy and can be showcased on your resume.",
    },
    {
      question: "What tools will I learn?",
      answer:
        "You'll learn industry-standard tools like AWS, Docker, Kubernetes, Jenkins, Terraform, and more.",
    },
    {
      question: "Do you offer free resources?",
      answer:
        "Yes, we provide free learning materials, tutorials, and community access.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can reach us through our website, email, or schedule a consultation call.",
    },
  ],
  basic: [
    {
      question: "What is included in the Basic plan?",
      answer:
        "The Basic plan includes fundamental DevOps projects, access to our learning platform, and community support.",
    },
    {
      question: "What is included in the Basic plan?",
      answer:
        "The Basic plan1 includes fundamental DevOps projects, access to our learning platform, and community support.",
    },
  ],
  advance: [
    {
      question: "What additional features come with Advanced?",
      answer:
        "Advanced includes intermediate projects, priority support, and resume workshop access.",
    },
  ],
  expert: [
    {
      question: "What makes the Expert plan special?",
      answer:
        "Expert plan includes advanced projects, 1:1 mentorship, interview preparation, and career guidance.",
    },
  ],
};

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      className={cn(
        "border-2  border-[#F5F7F9] rounded-[16px] my-2 transition duration-100 ease-in-out",
        isOpen &&
          "border-[3px] border-[#ff6600] rounded-2xl my-4 last:border-2 bg-gradient-to-b from-gradient-start to-gradient-end"
      )}
    >
      <button
        className="w-full px-6 py-6 flex items-center justify-between text-left"
        onClick={onClick}
      >
        <h3 className="text-[24px] text-[#2A254D] font-semibold">{question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <div className="bg-[#ff6600] rounded-full p-1">
              <Minus className="h-6 w-6 text-white" />
            </div>
          ) : (
            <div className="bg-[#ff6600] rounded-full p-1">
              <Plus className="h-6 w-6 text-white" />
            </div>
          )}
        </div>
      </button>
      {isOpen && (
        <div className="pb-6 px-6 text-[#2A254D] text-[20px] leading-[24px]">{answer}</div>
      )}
    </div>
  );
}

export function FAQSection({ FAQType}) {
  const [activeTab, setActiveTab] = useState(FAQType);
  const [openItems, setOpenItems] = useState(new Set([0]));
  const { width } = useWindowSize();

  const tabs = [
    { id: "project", label: "Project" },
    { id: "basic", label: "Basic" },
    { id: "advance", label: "Advance" },
    { id: "expert", label: "Expert" },
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 px-4 md:px-[100px]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[#19191A] text-[40px] font-semibold text-center">
          Frequently asked questions
        </h2>
        <p className="text-center text-[#474C59] text-[18px] mb-8 pl-8">
          Get hired as a Certified DevOps or Cloud Engineer with our intense
          DevOps Projects & Workshops programs. In-Depth with extensive
          real-life projects
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-[40px] py-[12px] rounded-[100px] text-[16px] font-medium transition-all",
                activeTab === tab.id
                  ? "bg-[#242323] text-white"
                  : "bg-[#f0f1f5] text-[#19191a] hover:bg-[#f0f1f5]/80",
                width < 600 && "px-[30px] py-[8px]  text-[12px]",  
                width < 450 && "px-[20px] py-[6px]  text-[8px]",  
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {/* FAQ Items */}
      <div className="space-y-2 max-w-[82%] mx-auto">
        {faqData[activeTab].map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItems.has(index)}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
}
