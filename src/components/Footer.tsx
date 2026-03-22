import { MessageCircle, Video, Twitter, Music } from "lucide-react";

const footerLinks = [
  { label: "维修信息", href: "#" },
  { label: "环保信息", href: "#" },
  { label: "法律与安全", href: "#" },
  { label: "销售服务中心招募", href: "#" },
  { label: "动力电池回收", href: "#" },
];

const socialLinks = [
  { icon: MessageCircle, label: "微信" },
  { icon: Video, label: "视频号" },
  { icon: Twitter, label: "微博" },
  { icon: Music, label: "抖音" },
];

export default function Footer() {
  return (
    <footer className="bg-[#12151a] text-white/60 py-10 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF6900] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-tighter">MI</span>
            </div>
            <span className="text-white/80 text-sm font-medium">小米汽车</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 hover:text-white/80 transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* Phone */}
          <div className="text-sm">
            <span className="text-white/40 text-xs">客服热线</span>
            <div className="text-white/80 font-medium">400-182-6888</div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 py-6 border-b border-white/10">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs hover:text-white/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Privacy */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 py-4 border-b border-white/10">
          <a href="#" className="text-xs hover:text-white/80 transition-colors">隐私政策</a>
          <a href="#" className="text-xs hover:text-white/80 transition-colors">权限说明</a>
          <a href="#" className="text-xs hover:text-white/80 transition-colors">用户协议</a>
          <a href="#" className="text-xs hover:text-white/80 transition-colors">Cookie政策</a>
        </div>

        {/* Copyright */}
        <div className="pt-6 space-y-1">
          <p className="text-xs text-white/30">©小米汽车科技有限公司</p>
          <p className="text-xs text-white/30">
            京ICP备2023017139号 &nbsp;|&nbsp; 京公网安备11010802043948号 &nbsp;|&nbsp; 京B2-20233141
          </p>
        </div>
      </div>
    </footer>
  );
}
