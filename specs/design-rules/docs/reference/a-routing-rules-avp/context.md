---
title: Эталонный код — «Routing Configurations / Rules / AVP» — правило
summary: Сырой эталонный код экрана A «Routing Configurations / Rules / AVP» (правило, глубокая конфигурация): геометрия, цвета, шрифты и тексты как есть.
read_when:
  - Нужны точные значения экрана правила A в коде: размеры, отступы, цвета, шрифты.
related:
  - ./screen.md
---
Эталонный код экрана в виде fenced-блока `tsx`. Это сырой код, снятый из макетов: точные размеры, отступы, цвета, шрифты и тексты как есть, без правок. Разбор экрана словами — [screen.md](screen.md).

```tsx
const imgIcons = "";
const imgIcons24Px = "";
const imgIconRoute24Px = "";
const imgIconEyeOff24Px = "";
const imgIconPlus24Px = "";
const imgIconPencil24Px = "";
const imgIcons1 = "";
const imgFrame1057 = "";
const imgIcons2 = "";
const imgIconInfoCircle16Px = "";
const imgIconInfoCircle16Px1 = "";
const imgIconTrash24Px = "";
const imgIconCopy24Px = "";
const imgIconDeviceFloppy24Px = "";
const imgIconChevronDown20Px = "";
const imgIconTrash24Px1 = "";

type Component10Props = {
  className?: string;
  darkMode?: "No";
  description?: "No";
  label?: string;
  size?: "Small";
  state?: "Default" | "Active";
  text?: boolean;
  type?: "Check";
};

function Component10({ className, darkMode = "No", description = "No", label = "Label", size = "Small", state = "Default", text = true, type = "Check" }: Component10Props) {
  if (size === "Small" && state === "Active" && !text && description === "No" && type === "Check" && darkMode === "No") {
    return (
      <button className={className || "bg-[#5d9af4] border border-[#5d9af4] border-solid content-stretch cursor-pointer flex items-center relative rounded-[4px]"} data-name="Size=Small, State=Active, Text=No, Description=No, Type=Check, Dark Mode=No">
        <div className="relative shrink-0 size-[16px]">
          <div className="absolute left-0 size-[16px] top-0" data-name="Icons">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons} />
          </div>
        </div>
      </button>
    );
  }
  return (
    <div className={className || "content-stretch flex gap-[6px] items-center relative"} data-name="Size=Small, State=Default, Text=Yes, Description=No, Type=Check, Dark Mode=No">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Component 10">
        <div className="bg-white border border-[#b0b4ba] border-solid relative rounded-[4px] shrink-0 size-[16px]" />
      </div>
      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[#141f2f] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        {label}
      </p>
    </div>
  );
}

export default function RoutingConfigurationsRulesAvp() {
  return (
    <div className="bg-[#f1f2f3] content-stretch flex items-start relative size-full" data-name="Routing Configurations / Rules / AVP">
      <div className="bg-white content-stretch flex flex-col h-[1080px] items-start justify-between py-[20px] relative shrink-0 w-[256px]" data-name="Menu">
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-full" data-name="Header">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[24px]" data-name="Icons / 24px / Меню">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons24Px} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#141f2f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">App</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative shrink-0 w-full" data-name="Menu">
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="Icon / list-details_24px" />
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Subscribers</p>
              </div>
            </div>
            <button className="bg-[#5d9af4] content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="Icon / code-dots_24px" />
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Routing configurations</p>
              </div>
            </button>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="Icon / affiliate_24px" />
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">App Сonfigurations</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="point_20px">
                <div className="absolute left-px size-[18px] top-px" data-name="Frame N">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRoute24Px} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Node Configurations</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="arrows-left-right_20px">
                <div className="absolute left-px size-[18px] top-px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEyeOff24Px} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Topology Hiding</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative shrink-0 w-full" data-name="Settings">
          <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
            <div className="relative shrink-0 size-[20px]" data-name="settings_20px" />
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">Account</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[1317px] items-start min-w-px pb-[24px] pt-[20px] px-[24px] relative" data-name="Content">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
          <a className="content-stretch cursor-pointer flex gap-[16px] items-center relative shrink-0 w-full" data-name="Breadcrumbs">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Breadcrumbs Container">
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#141f2f] text-[24px] text-left whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p>
                  <span className="leading-[28px] text-[#5d9af4]">{`Routing Configurations `}</span>
                  <span className="leading-[28px]">{`->`}</span>
                  <span className="leading-[28px] text-[#5d9af4]">{` Node A`}</span>
                  <span className="leading-[28px]">{` -> `}</span>
                  <span className="leading-[28px] text-[#5d9af4]">Config_05</span>
                  <span className="leading-[28px]">{` -> Initial Routing`}</span>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
              <div className="bg-[rgba(217,217,217,0)] border border-[#5d9af4] border-solid content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="button--light-primary">
                <div className="relative shrink-0 size-[16px]" data-name="Icon / pencil_24px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus24Px} />
                </div>
                <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[16px] relative shrink-0 text-[#5d9af4] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Add Rule
                </p>
              </div>
              <div className="bg-[rgba(217,217,217,0)] border border-[#5d9af4] border-solid content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="button--light-primary">
                <div className="relative shrink-0 size-[16px]" data-name="Icon / pencil_24px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPencil24Px} />
                </div>
                <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[16px] relative shrink-0 text-[#5d9af4] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit Block
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] h-[969px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col h-full items-start justify-between relative rounded-[8px] shrink-0">
            <div className="bg-white border border-[#dee0e3] border-solid content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0 w-[275px]">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Table & actions">
                <div className="bg-white border border-[#dee0e3] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Table">
                  <div className="bg-[#f8f8f8] content-stretch flex items-center relative shrink-0" data-name="Table Head">
                    <div className="flex flex-row items-center self-stretch">
                      <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0" data-name="table-cell">
                        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          #
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Description
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#eff5fe] content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 1">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        1
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Alpha
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 2">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        2
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Beta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 3">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        3
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Gamma
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 4">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        4
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Delta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 5">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        5
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Epsilon
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 6">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        6
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Zeta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 7">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        7
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Delta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 8">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        8
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Delta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 9">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        9
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Epsilon
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 10">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center p-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        10
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Zeta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 11">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center p-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        11
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Delta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 12">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center p-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        12
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Delta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 13">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center p-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        13
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Epsilon
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 14">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center p-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        14
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Zeta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 15">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center p-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        15
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Delta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 16">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center p-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        16
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Delta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 17">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center p-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        17
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Zeta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 18">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center p-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        18
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Delta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 19">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center p-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        19
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Delta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 20">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center p-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        20
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Delta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 22">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        21
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Zeta
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 23">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        22
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Epsilon
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 24">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        23
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[242px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Rule_Delta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[85px] items-center justify-center px-[24px] py-[20px] relative shrink-0 w-[275px]" data-name="Card-footer">
              <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0" data-name="Pagination">
                <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px]">
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="relative size-[24px]" data-name="Icons">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#5d9af4] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white w-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    1
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px]">
                  <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] text-center w-[36px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    2
                  </p>
                </div>
                <div className="relative shrink-0 size-[32px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1057} />
                </div>
                <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px]">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#172537] text-[14px] text-center w-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    5
                  </p>
                </div>
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="flex-none rotate-180">
                    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] size-[32px]">
                      <div className="flex items-center justify-center relative shrink-0">
                        <div className="-scale-y-100 flex-none">
                          <div className="relative size-[24px]" data-name="Icons">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
            <div className="bg-white border border-[#dee0e3] border-solid content-stretch flex flex-col items-start p-[20px] relative rounded-[8px] shrink-0 w-full" data-name="Component 793">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
                    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
                      <div className="content-stretch flex flex-col gap-[6px] h-[62px] items-start relative shrink-0 w-[80px]" data-name="input--light-primary">
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Position
                          </p>
                          <div className="flex flex-row items-center self-stretch">
                            <div className="content-stretch flex h-full items-center pl-[4px] relative shrink-0" data-name="context-help-icon">
                              <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="focus">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon / info-circle_16px">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle16Px} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                          <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#141f2f] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                1
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[6px] h-[62px] items-start relative shrink-0 w-[755px]" data-name="input--light-primary">
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Description
                          </p>
                          <div className="flex flex-row items-center self-stretch">
                            <div className="content-stretch flex h-full items-center pl-[4px] relative shrink-0" data-name="context-help-icon">
                              <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="focus">
                                <div className="relative shrink-0 size-[16px]" data-name="Icon / info-circle_16px">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle16Px} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                          <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#141f2f] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                Rule_Epsilon
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Component 10">
                          <Component10 className="bg-[#5d9af4] border border-[#5d9af4] border-solid content-stretch cursor-pointer flex items-center relative rounded-[4px] shrink-0" state="Active" text={false} />
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[#141f2f] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Wait answer
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="input--light-primary">
                          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                            <div className="content-stretch flex items-center pl-[4px] relative shrink-0" data-name="context-help-icon">
                              <div className="content-stretch flex items-center justify-center relative rounded-[2px] shrink-0" data-name="focus">
                                <div className="relative shrink-0 size-[14px]" data-name="Icon / info-circle_16px">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle16Px1} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Component 10">
                          <div className="content-stretch flex items-center relative shrink-0" data-name="Component 10">
                            <div className="bg-white border border-[#b0b4ba] border-solid relative rounded-[4px] shrink-0 size-[16px]" />
                          </div>
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[#141f2f] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Session Binding
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="input--light-primary">
                          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                            <div className="content-stretch flex items-center pl-[4px] relative shrink-0" data-name="context-help-icon">
                              <div className="content-stretch flex items-center justify-center relative rounded-[2px] shrink-0" data-name="focus">
                                <div className="relative shrink-0 size-[14px]" data-name="Icon / info-circle_16px">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle16Px1} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="input--light-primary">
                          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                            <div className="content-stretch flex items-center pl-[4px] relative shrink-0" data-name="context-help-icon">
                              <div className="content-stretch flex items-center justify-center relative rounded-[2px] shrink-0" data-name="focus">
                                <div className="relative shrink-0 size-[14px]" data-name="Icon / info-circle_16px">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle16Px1} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Component 10">
                          <div className="content-stretch flex items-center relative shrink-0" data-name="Component 10">
                            <div className="bg-white border border-[#b0b4ba] border-solid relative rounded-[4px] shrink-0 size-[16px]" />
                          </div>
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[#141f2f] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Action_Delta
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="input--light-primary">
                          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                            <div className="content-stretch flex items-center pl-[4px] relative shrink-0" data-name="context-help-icon">
                              <div className="content-stretch flex items-center justify-center relative rounded-[2px] shrink-0" data-name="focus">
                                <div className="relative shrink-0 size-[14px]" data-name="Icon / info-circle_16px">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle16Px1} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Component 10">
                          <Component10 className="bg-[#5d9af4] border border-[#5d9af4] border-solid content-stretch cursor-pointer flex items-center relative rounded-[4px] shrink-0" state="Active" text={false} />
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[#141f2f] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Resend on error
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="input--light-primary">
                          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                            <div className="content-stretch flex items-center pl-[4px] relative shrink-0" data-name="context-help-icon">
                              <div className="content-stretch flex items-center justify-center relative rounded-[2px] shrink-0" data-name="focus">
                                <div className="relative shrink-0 size-[14px]" data-name="Icon / info-circle_16px">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle16Px1} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[16px] items-start justify-end pt-[26px] relative shrink-0">
                    <div className="bg-[#eff5fe] content-stretch flex gap-[8px] h-[36px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="button--light-primary">
                      <div className="h-full relative shrink-0 w-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                    <div className="bg-[#eff5fe] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="button--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCopy24Px} />
                      </div>
                    </div>
                    <div className="bg-[#eff5fe] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="button--light-primary">
                      <div className="flex flex-row items-center self-stretch">
                        <div className="h-full relative shrink-0 w-[20px]" data-name="Icon / pencil_24px">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCopy24Px} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#5d9af4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Cancel
                      </p>
                    </div>
                    <a className="bg-[#5d9af4] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="button--light-primary">
                      <div className="flex flex-row items-center self-stretch">
                        <div className="h-full relative shrink-0 w-[20px]" data-name="Icon / pencil_24px">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDeviceFloppy24Px} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-left text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Save
                      </p>
                    </a>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] h-[62px] items-start min-w-px relative" data-name="Input & Select">
                    <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Topology Hiding mode
                    </p>
                    <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                      <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#141f2f] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        (0) Topology Hiding is disabled
                      </p>
                      <div className="absolute right-[12px] size-[20px] top-[8px]" data-name="Icon / chevron-down_20px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown20Px} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px opacity-50 pt-[24px] relative" data-name="Component 10">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Component 10">
                      <div className="bg-[#dee0e3] border border-[#b0b4ba] border-solid relative rounded-[4px] shrink-0 size-[16px]" />
                    </div>
                    <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[#46505d] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Action_Epsilon
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                    <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Action
                    </p>
                    <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                      <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#141f2f] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Select Action
                      </p>
                      <div className="absolute right-[12px] size-[20px] top-[8px]" data-name="Icon / chevron-down_20px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown20Px} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                    <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Answer Rule
                    </p>
                    <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                      <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#141f2f] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Select parameter
                      </p>
                      <div className="absolute right-[12px] size-[20px] top-[8px]" data-name="Icon / chevron-down_20px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown20Px} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#dee0e3] border-solid content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[8px] shrink-0 w-full" data-name="Component 797">
              <div className="border-[#dee0e3] border-b border-solid content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Tabs">
                <div className="content-stretch flex flex-col gap-[8px] h-[30px] items-start justify-center relative shrink-0" data-name="Tab 1">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tab">
                    <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#5d9af4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Routing keys
                    </p>
                  </div>
                  <div className="bg-[#5d9af4] h-[2px] relative shrink-0 w-full" />
                </div>
                <div className="content-stretch flex flex-col gap-[8px] h-[30px] items-start justify-center relative shrink-0" data-name="Tab 2">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tab">
                    <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      AVP Management
                    </p>
                  </div>
                  <div className="bg-[#79818b] h-[2px] opacity-0 relative shrink-0 w-full" />
                </div>
                <div className="content-stretch flex flex-col gap-[8px] h-[30px] items-start justify-center opacity-50 relative shrink-0" data-name="Tab 3">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tab">
                    <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Main routes
                    </p>
                  </div>
                  <div className="bg-[#79818b] h-[2px] opacity-0 relative shrink-0 w-full" />
                </div>
                <div className="content-stretch flex flex-col gap-[8px] h-[30px] items-start justify-center opacity-50 relative shrink-0" data-name="Tab 4">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tab">
                    <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Alternative routes
                    </p>
                  </div>
                  <div className="bg-[#79818b] h-[2px] opacity-0 relative shrink-0 w-full" />
                </div>
                <div className="content-stretch flex flex-col gap-[8px] h-[30px] items-start justify-center opacity-50 relative shrink-0" data-name="Tab 5">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tab">
                    <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Mirroring routes
                    </p>
                  </div>
                  <div className="bg-[#79818b] h-[2px] opacity-0 relative shrink-0 w-full" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[416px]" data-name="Input & Select">
                  <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Rule field
                  </p>
                  <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                    <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#141f2f] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      AVP
                    </p>
                    <div className="absolute right-[12px] size-[20px] top-[8px]" data-name="Icon / chevron-down_20px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown20Px} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="input--light-primary">
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          AVPs
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#eff5fe] content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="button--light-primary">
                      <div className="relative shrink-0 size-[16px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus24Px} />
                      </div>
                      <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[16px] relative shrink-0 text-[#5d9af4] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Add AVP
                      </p>
                    </div>
                  </div>
                  <div className="border border-[#dee0e3] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="bg-[rgba(217,217,217,0)] border border-[#5d9af4] border-solid content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="button--light-primary">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon / pencil_24px">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus24Px} />
                        </div>
                        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[16px] relative shrink-0 text-[#5d9af4] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Add Grouped AVP
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                        <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px1} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
                      <div className="content-stretch flex gap-[8px] h-[20px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              AVP ID
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[600px]" data-name="input--light-primary">
                          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Vendor ID
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 size-[36px]" data-name="btn-icon--light-primary" />
                      </div>
                      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  888
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[600px]" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  888-888
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                          <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px1} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-start pl-[8px] relative shrink-0 w-full">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  777
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[600px]" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  777-777
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                          <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px1} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-start pl-[16px] relative shrink-0 w-full">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  666
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[600px]" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  666-666
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                          <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px1} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-start pl-[24px] relative shrink-0 w-full">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  555
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[600px]" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  555-555
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                          <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px1} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-start pl-[32px] relative shrink-0 w-full">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  444
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[600px]" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  444-444
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                          <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px1} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-start pl-[40px] relative shrink-0 w-full">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  333
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[600px]" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  333-333
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                          <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px1} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-start pl-[48px] relative shrink-0 w-full">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  222
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[600px]" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  222-222
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                          <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px1} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-start pl-[54px] relative shrink-0 w-full">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  111
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[600px]" data-name="input--light-primary">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                            <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative" data-name="input">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#79818b] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  111-111
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                          <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px1} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            AVP ID
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                          <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px py-[8px] relative" data-name="input">
                              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#141f2f] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                4,16777238
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Vendor ID
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                          <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px py-[8px] relative" data-name="input">
                              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#141f2f] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                4,16777238
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Value
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                          <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px py-[8px] relative" data-name="input">
                              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#141f2f] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                4,16777238
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-[#dee0e3] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="bg-[rgba(217,217,217,0)] border border-[#5d9af4] border-solid content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="button--light-primary">
                        <div className="relative shrink-0 size-[16px]" data-name="Icon / pencil_24px">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus24Px} />
                        </div>
                        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[16px] relative shrink-0 text-[#5d9af4] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Add Grouped AVP
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                        <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px1} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            AVP ID
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                          <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px py-[8px] relative" data-name="input">
                              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#141f2f] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                4,16777238
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Vendor ID
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                          <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px py-[8px] relative" data-name="input">
                              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#141f2f] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                4,16777238
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input--light-primary">
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-container">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Value
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-layout">
                          <div className="bg-[#ecedef] border border-[#ecedef] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="input-container">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px py-[8px] relative" data-name="input">
                              <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px overflow-hidden relative text-[#141f2f] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                4,16777238
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
SUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.

These styles are contained in the design: Gray/100: #141F2F, H1 / Bold: Font(family: "Roboto", style: Bold, size: 16, weight: 700, lineHeight: 20, letterSpacing: 0), Gray/60: #79818B, P/Medium: Font(family: "Roboto", style: Medium, size: 14, weight: 500, lineHeight: 20, letterSpacing: 0), White: #FFFFFF, Blue Light/100: #5D9AF4, Tittle 1 / Medium: Font(family: "Roboto", style: Medium, size: 24, weight: 500, lineHeight: 28, letterSpacing: 0), Caption 1/Medium: Font(family: "Roboto", style: Medium, size: 13, weight: 500, lineHeight: 16, letterSpacing: 0), Transparent: #D9D9D9, Gray/70: #5F6772, Gray/20: #DEE0E3, P/Regular: Font(family: "Roboto", style: Regular, size: 14, weight: 400, lineHeight: 20, letterSpacing: 0), Blue Light/10: #EFF5FE, Gray/10: #ECEDEF, Caption 1/Regular: Font(family: "Roboto", style: Regular, size: 13, weight: 400, lineHeight: 16, letterSpacing: 0), Gray/40: #B0B4BA, Gray/80: #46505D, Red/100: #E61E43, Bg-gray-light: #F1F2F3.
Component descriptions: The following components have usage descriptions or documentation links defined in Figma. These descriptions provide important context about the intended usage, best practices, and any constraints for each component. Follow these guidelines when implementing or using these components.

## button--light-primary

**v**2.2.0
==========

## input--light-primary

**v2.3.0**
==========

## btn-icon--light-primary

**v**2.2.0
==========
```
