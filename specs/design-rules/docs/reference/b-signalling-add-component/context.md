---
title: Эталонный код — «Signalling — Add component» — форма
summary: Сырой эталонный код экрана B «Signalling — Add component» (форма): геометрия, цвета, шрифты и тексты как есть.
read_when:
  - Нужны точные значения экрана-формы B в коде: размеры, отступы, цвета, шрифты.
related:
  - ./screen.md
---
Эталонный код экрана в виде fenced-блока `tsx`. Это сырой код, снятый из макетов: точные размеры, отступы, цвета, шрифты и тексты как есть, без правок. Разбор экрана словами — [screen.md](screen.md).

```tsx
const imgComponent9 = "";
const imgIcons = "";
const imgIcons16Px = "";
const imgIcons24Px = "";
const imgIconShare24Px = "";
const imgFrame943 = "";
const imgIconRoute24Px = "";
const imgFrameN = "";
const imgFrame946 = "";
const imgFrame948 = "";
const imgFrame949 = "";
const imgIconChevronDown20Px = "";
const imgIconTrash24Px = "";
const imgIconInfoCircle24Px = "";
const imgIconInfoCircle24Px1 = "";
const imgIconInfoCircle24Px2 = "";
const imgIconTrash24Px1 = "";
const imgLine53 = "";
const imgLine54 = "";

type Component10Props = {
  className?: string;
  darkMode?: "No";
  description?: "No";
  label?: string;
  size?: "Default";
  state?: "Default" | "Active";
  text?: boolean;
  type?: "Radio" | "Check";
};

function Component10({ className, darkMode = "No", description = "No", label = "Label", size = "Default", state = "Default", text = true, type = "Radio" }: Component10Props) {
  if (size === "Default" && state === "Default" && !text && description === "No" && type === "Check" && darkMode === "No") {
    return (
      <div className={className || "content-stretch flex items-center relative"} data-name="Size=Default, State=Default, Text=No, Description=No, Type=Check, Dark Mode=No">
        <div className="bg-white border border-[#b0b4ba] border-solid relative rounded-[4px] shrink-0 size-[16px]" />
      </div>
    );
  }
  if (size === "Default" && state === "Active" && !text && description === "No" && type === "Check" && darkMode === "No") {
    return (
      <button className={className || "bg-[#5d9af4] border border-[#5d9af4] border-solid content-stretch cursor-pointer flex items-center relative rounded-[4px]"} data-name="Size=Default, State=Active, Text=No, Description=No, Type=Check, Dark Mode=No">
        <div className="relative shrink-0 size-[16px]">
          <div className="absolute left-0 size-[16px] top-0" data-name="Icons">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons} />
          </div>
        </div>
      </button>
    );
  }
  return (
    <div className={className || "content-stretch flex gap-[8px] items-center relative"} data-name="Size=Default, State=Default, Text=Yes, Description=No, Type=Radio, Dark Mode=No">
      <div className="relative shrink-0 size-[16px]" data-name="Component 9">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgComponent9} />
      </div>
      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        {label}
      </p>
    </div>
  );
}

function Icons16Px({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[16px]"} data-name="Icons / 16px / Динамическое поле">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons16Px} />
    </div>
  );
}

export default function SignallingAddComponent() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Signalling - Add component (Component)">
      <div className="bg-white content-stretch flex flex-col items-start justify-between py-[20px] relative self-stretch shrink-0 w-[256px]" data-name="Menu">
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
              <div className="relative shrink-0 size-[20px]" data-name="Icon / share_24px">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconShare24Px} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Instances</p>
              </div>
            </div>
            <button className="bg-[#5d9af4] content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="antenna-bars-5_20px">
                <div className="absolute left-px size-[18px] top-px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame943} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Signaling</p>
              </div>
            </button>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="Icon / route_24px">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRoute24Px} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Routing</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="point_20px">
                <div className="absolute left-px size-[18px] top-px" data-name="Frame N">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrameN} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Point Codes</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="arrows-left-right_20px">
                <div className="absolute left-px size-[18px] top-px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame946} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Profile SCTP</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="checkbox_20px">
                <div className="absolute left-px size-[18px] top-px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame948} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Check</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="Icon / users_24px" />
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Users</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Btn menu">
              <div className="relative shrink-0 size-[20px]" data-name="file-search_20px">
                <div className="absolute left-px size-[18px] top-px">
                  <div className="absolute inset-[0_0_-0.34%_0]">
                    <img alt="" className="block max-w-none size-full" src={imgFrame949} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Audit</p>
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
      <div className="bg-[#ecedef] content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px pt-[24px] px-[24px] relative">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-[892px]" data-name="Title">
          <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-full" data-name="Name">
            <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[0] relative shrink-0 text-[#5d9af4] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <span className="leading-[28px] text-[#79818b]">{`Signalling -> Компонент ->`}</span>
              <span className="leading-[28px]">{` Component`}</span>
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative rounded-[8px]" data-name="Right">
            <div className="bg-white content-stretch flex gap-[24px] items-start overflow-clip p-[20px] relative rounded-[8px] shrink-0 w-full" data-name="Head">
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-[1176px]">
                <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Inputs">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[#5f6772] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <span className="leading-[20px] text-[14px]">Component name</span>
                        <span className="leading-[20px] text-[#e61e43] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                          *
                        </span>
                      </p>
                    </div>
                    <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                      <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#79818b] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Placeholder
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Component Id
                      </p>
                    </div>
                    <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                      <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#79818b] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Placeholder
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                    <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <span className="leading-[20px]">SSU</span>
                      <span className="leading-[20px] text-[#e61e43]">*</span>
                    </p>
                    <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                      <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#141f2f] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Not selected
                      </p>
                      <div className="absolute right-[12px] size-[20px] top-[8px]" data-name="Icon / chevron-down_20px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown20Px} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-end min-w-px relative self-stretch" data-name="Buttons group">
                <div className="content-stretch flex gap-[8px] h-[36px] items-center justify-center opacity-50 px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Component 11">
                  <div className="relative shrink-0 size-[16px]" data-name="pencil">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                  </div>
                  <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#979da5] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Delete
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Component 11">
                  <div className="relative shrink-0 size-[16px]" data-name="pencil">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                  </div>
                  <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#5d9af4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Close
                  </p>
                </div>
                <div className="bg-[#b5b9bf] content-stretch flex gap-[8px] h-[36px] items-center justify-center opacity-50 px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Component 11">
                  <div className="relative shrink-0 size-[16px]" data-name="pencil">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                  </div>
                  <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Create
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
              <div className="col-1 content-stretch flex flex-col gap-[16px] items-start ml-0 mt-0 pb-[60px] pt-[16px] relative row-1 w-full" data-name="Body">
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[8px] shrink-0 w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Title">
                    <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#141f2f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Parameter Component
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1176px]">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input & Select">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            <span className="leading-[20px]">OPC</span>
                            <span className="leading-[20px] text-[#e61e43]">*</span>
                          </p>
                          <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                            <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#141f2f] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Not selected
                            </p>
                            <div className="absolute right-[12px] size-[20px] top-[8px]" data-name="Icon / chevron-down_20px">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown20Px} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0">
                        <div className="content-stretch flex h-[20px] items-start justify-center relative shrink-0 w-[28px]" data-name="Empty" />
                        <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular'] font-normal gap-[16px] h-[36px] items-center leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap">
                          <p className="relative shrink-0 text-[#5d9af4] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
                            VAR
                          </p>
                          <p className="relative shrink-0 text-[#b0b4ba]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            VAL
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        SCTP profile
                      </p>
                      <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                        <div className="absolute right-[12px] size-[20px] top-[8px]" data-name="Icon / chevron-down_20px">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown20Px} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Bandwidth
                        </p>
                        <div className="relative shrink-0 size-[16px]" data-name="Icon / info-circle_24px">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle24Px} />
                        </div>
                      </div>
                      <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame" />
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[8px] shrink-0 w-full" data-name="SCCP">
                  <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Headline">
                    <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#141f2f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Parameter Local IP
                    </p>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 w-[1176px]" data-name="Body">
                    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-start min-w-px relative">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            <span className="leading-[20px]">Local primary IP</span>
                            <span className="leading-[20px] text-[#e61e43]">*</span>
                          </p>
                        </div>
                        <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame" />
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            <span className="leading-[20px]">Local Port</span>
                            <span className="leading-[20px] text-[#e61e43]">*</span>
                          </p>
                        </div>
                        <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame" />
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Local secondary IPs
                          </p>
                          <div className="relative shrink-0 size-[16px]" data-name="Icon / info-circle_24px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle24Px} />
                          </div>
                        </div>
                        <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[8px] shrink-0 w-full" data-name="SCCP">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Title">
                    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0">
                      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#141f2f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Parameter Remote IP
                        </p>
                        <div className="relative shrink-0 size-[16px]" data-name="Icon / info-circle_24px">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle24Px1} />
                        </div>
                      </div>
                      <div className="bg-[#eff5fe] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[6px] relative rounded-[8px] shrink-0" data-name="Component 288">
                        <div className="relative shrink-0 size-[16px]" data-name="pencil">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                        </div>
                        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#5d9af4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Add
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Card1">
                    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1176px]">
                      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[6px] relative shrink-0" data-name="Card 1">
                        <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1176px]">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  Allowed remote port
                                </p>
                              </div>
                              <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame" />
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Textarea">
                              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Lable">
                                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  <span className="leading-[20px]">Allowed remote IP</span>
                                  <span className="leading-[20px] text-[#e61e43]">*</span>
                                </p>
                                <div className="relative shrink-0 size-[16px]" data-name="Icon / info-circle_24px">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle24Px2} />
                                </div>
                              </div>
                              <div className="bg-[#ecedef] h-[56px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                                <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#79818b] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  Enter a description...
                                </p>
                                <Icons16Px className="absolute bottom-[4px] right-[4px] size-[16px]" />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex items-center pt-[4px] relative self-stretch shrink-0">
                            <div className="content-stretch flex items-center p-[7px] relative shrink-0" data-name="Icon Buttons">
                              <div className="relative shrink-0 size-[20px]" data-name="Icon / trash_24px">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px1} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgLine53} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[6px] relative shrink-0" data-name="Card 6">
                        <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1176px]">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  Allowed remote port
                                </p>
                              </div>
                              <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame" />
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Textarea">
                              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Lable">
                                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  <span className="leading-[20px]">Allowed remote IP</span>
                                  <span className="leading-[20px] text-[#e61e43]">*</span>
                                </p>
                                <div className="relative shrink-0 size-[16px]" data-name="Icon / info-circle_24px">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle24Px2} />
                                </div>
                              </div>
                              <div className="bg-[#ecedef] h-[56px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                                <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#79818b] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  Enter a description...
                                </p>
                                <Icons16Px className="absolute bottom-[4px] right-[4px] size-[16px]" />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex items-center pt-[4px] relative self-stretch shrink-0">
                            <div className="content-stretch flex items-center p-[7px] relative shrink-0" data-name="Icon Buttons">
                              <div className="relative shrink-0 size-[20px]" data-name="Icon / trash_24px">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px1} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[8px] shrink-0 w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Title">
                    <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#141f2f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Parameter ASP
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[376px]" data-name="Input & Select">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Max number of ASP
                        </p>
                      </div>
                      <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                        <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#79818b] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Default value is 1
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[376px]" data-name="Input & Select">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Heartbeat interval(ms)
                        </p>
                        <div className="relative shrink-0 size-[16px]" data-name="Icon / info-circle_24px">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle24Px} />
                        </div>
                      </div>
                      <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                        <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#79818b] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Default value is 1000
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[376px]" data-name="Input & Select">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Timeout down state(ms)
                        </p>
                        <div className="relative shrink-0 size-[16px]" data-name="Icon / info-circle_24px">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle24Px} />
                        </div>
                      </div>
                      <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                        <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#79818b] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Default value is 1000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-center py-[8px] relative shrink-0 w-[776px]">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[376px]">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Component 10">
                        <Component10 className="content-stretch flex items-center relative shrink-0" text={false} type="Check" />
                        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Send ID of ASP
                        </p>
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="Icon / info-circle_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle24Px1} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Component 11">
                      <Component10 className="content-stretch flex items-center relative shrink-0" text={false} type="Check" />
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Enable heartbeat
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[8px] shrink-0 w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Title">
                    <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#141f2f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Parameter AS
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1176px]">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Traffic Mode Type
                      </p>
                      <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                        <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#141f2f] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Not selected
                        </p>
                        <div className="absolute right-[12px] size-[20px] top-[8px]" data-name="Icon / chevron-down_20px">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown20Px} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Max number dynamic AS
                        </p>
                      </div>
                      <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                        <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#79818b] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Default value is 0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1176px]">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          AS pending buffer
                        </p>
                      </div>
                      <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                        <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#79818b] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Default value is 1000
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Pending timeout of AS(ms)
                        </p>
                      </div>
                      <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                        <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#79818b] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Default value is 2000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[20px] relative rounded-[8px] shrink-0 w-full" data-name="Static AS">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Title">
                    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0">
                      <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#141f2f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Static AS
                      </p>
                      <div className="bg-[#eff5fe] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[6px] relative rounded-[8px] shrink-0" data-name="Component 288">
                        <div className="relative shrink-0 size-[16px]" data-name="pencil">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                        </div>
                        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#5d9af4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Add
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1176px]" data-name="Card 1">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Application Server
                        </p>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[90px]" data-name="Component 11">
                            <Component10 className="content-stretch flex items-center relative shrink-0" text={false} type="Check" />
                            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Default AS
                            </p>
                          </div>
                          <div className="relative shrink-0 size-[16px]" data-name="Icon / info-circle_24px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle24Px1} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[6px] relative rounded-[8px] shrink-0" data-name="Component 288">
                        <div className="relative shrink-0 size-[16px]" data-name="pencil">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                        </div>
                        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#e61e43] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Delete Route
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input & Select">
                            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <span className="leading-[20px]">DPC</span>
                              <span className="leading-[20px] text-[#e61e43]">*</span>
                            </p>
                            <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                              <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#141f2f] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                Not selected
                              </p>
                              <div className="absolute right-[12px] size-[20px] top-[8px]" data-name="Icon / chevron-down_20px">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown20Px} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0">
                          <div className="content-stretch flex h-[20px] items-start justify-center relative shrink-0 w-[28px]" data-name="Empty" />
                          <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular'] font-normal gap-[16px] h-[36px] items-center leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap">
                            <p className="relative shrink-0 text-[#5d9af4] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
                              VAR
                            </p>
                            <p className="relative shrink-0 text-[#b0b4ba]" style={{ fontVariationSettings: '"wdth" 100' }}>
                              VAL
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Routing Context
                          </p>
                          <div className="relative shrink-0 size-[16px]" data-name="Icon / info-circle_24px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle24Px} />
                          </div>
                        </div>
                        <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                          <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#79818b] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Default value is 0
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Traffic Mode Type
                        </p>
                        <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                          <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#141f2f] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Not selected
                          </p>
                          <div className="absolute right-[12px] size-[20px] top-[8px]" data-name="Icon / chevron-down_20px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown20Px} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-0 relative shrink-0 w-[1176px]">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine54} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1176px]" data-name="Card 2">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Application Server
                        </p>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[90px]" data-name="Component 11">
                            <Component10 className="content-stretch flex items-center relative shrink-0" text={false} type="Check" />
                            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Default AS
                            </p>
                          </div>
                          <div className="relative shrink-0 size-[16px]" data-name="Icon / info-circle_24px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle24Px1} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[6px] relative rounded-[8px] shrink-0" data-name="Component 288">
                        <div className="relative shrink-0 size-[16px]" data-name="pencil">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                        </div>
                        <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#e61e43] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Delete Route
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input & Select">
                            <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[0] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              <span className="leading-[20px]">DPC</span>
                              <span className="leading-[20px] text-[#e61e43]">*</span>
                            </p>
                            <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                              <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#141f2f] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                Not selected
                              </p>
                              <div className="absolute right-[12px] size-[20px] top-[8px]" data-name="Icon / chevron-down_20px">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown20Px} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0">
                          <div className="content-stretch flex h-[20px] items-start justify-center relative shrink-0 w-[28px]" data-name="Empty" />
                          <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular'] font-normal gap-[16px] h-[36px] items-center leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap">
                            <p className="relative shrink-0 text-[#5d9af4] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
                              VAR
                            </p>
                            <p className="relative shrink-0 text-[#b0b4ba]" style={{ fontVariationSettings: '"wdth" 100' }}>
                              VAL
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Routing Context
                          </p>
                          <div className="relative shrink-0 size-[16px]" data-name="Icon / info-circle_24px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfoCircle24Px} />
                          </div>
                        </div>
                        <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                          <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#79818b] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Default value is 0
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input & Select">
                        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Traffic Mode Type
                        </p>
                        <div className="bg-[#ecedef] h-[36px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Frame">
                          <p className="[word-break:break-word] absolute font-['Roboto:Regular'] font-normal leading-[20px] left-[12px] text-[#141f2f] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Not selected
                          </p>
                          <div className="absolute right-[12px] size-[20px] top-[8px]" data-name="Icon / chevron-down_20px">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown20Px} />
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

These styles are contained in the design: Gray/100: #141F2F, H1 / Bold: Font(family: "Roboto", style: Bold, size: 16, weight: 700, lineHeight: 20, letterSpacing: 0), Gray/60: #79818B, P/Medium: Font(family: "Roboto", style: Medium, size: 14, weight: 500, lineHeight: 20, letterSpacing: 0), White: #FFFFFF, Blue Light/100: #5D9AF4, Tittle 1 / Bold: Font(family: "Roboto", style: Bold, size: 24, weight: 700, lineHeight: 28, letterSpacing: 0), Gray/70: #5F6772, P/Regular: Font(family: "Roboto", style: Regular, size: 14, weight: 400, lineHeight: 20, letterSpacing: 0), Gray/10: #ECEDEF, Gray/50: #979DA5, Gray/40: #B0B4BA, Headline /  Medium: Font(family: "Roboto", style: Medium, size: 16, weight: 500, lineHeight: 20, letterSpacing: 0), Blue Light/10: #EFF5FE, Red/100: #E61E43, Gray/20: #DEE0E3.
```
