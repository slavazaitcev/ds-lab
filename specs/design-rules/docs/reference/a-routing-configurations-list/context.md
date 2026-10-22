---
title: Эталонный код — «Routing Configurations / Table» — конфигурации, список
summary: Сырой эталонный код экрана A «Routing Configurations / Table» (конфигурации, список): геометрия, цвета, шрифты и тексты как есть.
read_when:
  - Нужны точные значения экрана-списка конфигураций A в коде: размеры, отступы, цвета, шрифты.
related:
  - ./screen.md
---
Эталонный код экрана в виде fenced-блока `tsx`. Это сырой код, снятый из макетов: точные размеры, отступы, цвета, шрифты и тексты как есть, без правок. Разбор экрана словами — [screen.md](screen.md).

```tsx
const imgIcons24Px = "";
const imgIconRoute24Px = "";
const imgIconEyeOff24Px = "";
const imgIconPlus24Px = "";
const imgIconFileImport24Px = "";
const imgIconCheck24Px = "";
const imgIconDownload24Px = "";
const imgIconEdit24Px = "";
const imgIconTrash24Px = "";
const imgIcons = "";
const imgFrame1057 = "";
const imgIcons1 = "";
const imgChevronDown16Px = "";

export default function RoutingConfigurationsTable() {
  return (
    <div className="bg-[#f1f2f3] content-stretch flex items-start relative size-full" data-name="Routing Configurations / Table">
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
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-px pb-[24px] pt-[20px] px-[24px] relative" data-name="Content">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Breadcrumbs">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Breadcrumbs Container">
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#141f2f] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[28px]">Routing Configurations</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px relative w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Tabs & actions">
              <div className="border-[#dee0e3] border-b border-solid content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Tabs">
                <div className="content-stretch flex flex-col gap-[8px] h-[30px] items-start justify-center relative shrink-0" data-name="Tab 1">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tab">
                    <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#5d9af4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Node_A
                    </p>
                  </div>
                  <div className="bg-[#5d9af4] h-[2px] relative shrink-0 w-full" />
                </div>
                <div className="content-stretch flex flex-col gap-[8px] h-[30px] items-start justify-center relative shrink-0" data-name="Tab 2">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tab">
                    <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#79818b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Node_B
                    </p>
                  </div>
                  <div className="bg-[#79818b] h-[2px] opacity-0 relative shrink-0 w-full" />
                </div>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex gap-[12px] h-full items-center relative shrink-0 w-[71px]" data-name="Actions" />
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
              <div className="bg-[rgba(217,217,217,0)] border border-[#5d9af4] border-solid content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="button--light-primary">
                <div className="relative shrink-0 size-[16px]" data-name="Icon / pencil_24px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus24Px} />
                </div>
                <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[16px] relative shrink-0 text-[#5d9af4] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Add Configuration
                </p>
              </div>
              <div className="bg-[rgba(217,217,217,0)] border border-[#5d9af4] border-solid content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="button--light-primary">
                <div className="relative shrink-0 size-[16px]" data-name="Icon / pencil_24px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFileImport24Px} />
                </div>
                <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[16px] relative shrink-0 text-[#5d9af4] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Import
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] h-[792px] items-start relative shrink-0 w-full" data-name="Table & actions">
              <div className="bg-white border border-[#dee0e3] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative rounded-[8px] w-full" data-name="Table">
                <div className="bg-[#f8f8f8] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Head">
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Name
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Creation date
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Update date
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Apply date
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Version
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center self-stretch">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[204px]" data-name="table-cell" />
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 1">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_05
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.05.28 15:20
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.05.28 15:20
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.05.27 17:59
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1003
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <a className="content-stretch cursor-pointer flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </a>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 2">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_06
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.05.29 10:15
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.05.29 10:15
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.05.28 16:30
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1004
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 3">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_07
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.01 09:00
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.01 09:00
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.05.30 18:05
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1005
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 4">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_08
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.02 14:45
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.02 14:45
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.01 12:30
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1006
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 5">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_09
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.03 11:30
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.03 11:30
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.02 13:15
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1007
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <a className="content-stretch cursor-pointer flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </a>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 6">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_10
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.04 08:00
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.04 08:00
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.03 10:00
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1008
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 7">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_11
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.05 16:20
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.05 16:20
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.04 15:40
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1009
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 8">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_12
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.06 12:10
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.06 12:10
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.05 14:55
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1010
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 9">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_13
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.07 07:30
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.07 07:30
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.06 09:45
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1011
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <a className="content-stretch cursor-pointer flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </a>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 10">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_14
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.08 13:15
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.08 13:15
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.07 11:20
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1012
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 11">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_15
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.09 09:50
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.09 09:50
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.08 14:25
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1013
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 12">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_16
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.10 17:00
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.10 17:00
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.09 16:10
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1014
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 13">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_17
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.11 10:30
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.11 10:30
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.10 12:40
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1015
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <a className="content-stretch cursor-pointer flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </a>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 14">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_18
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.12 15:15
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.12 15:15
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.11 14:05
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1016
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 15">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_19
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.13 11:05
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.13 11:05
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.12 13:50
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1017
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 16">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_20
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.14 18:00
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.14 18:00
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.13 15:30
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1018
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 17">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_21
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.15 09:20
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.15 09:20
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.14 10:45
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1019
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <a className="content-stretch cursor-pointer flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </a>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 18">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_22
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.16 14:50
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.16 14:50
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.15 11:30
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1020
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 19">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_23
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.17 16:10
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.17 16:10
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.16 15:00
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1021
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 20">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_24
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.18 08:40
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.18 08:40
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.17 12:20
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1022
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Row 21">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Config_25
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.19 17:30
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.19 17:30
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2025.06.18 14:15
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1023
                    </p>
                  </div>
                  <div className="border-[#dee0e3] border-b border-solid content-stretch flex h-full items-center justify-end px-[12px] relative shrink-0" data-name="table-cell">
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDownload24Px} />
                      </div>
                    </div>
                    <a className="content-stretch cursor-pointer flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </a>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center px-[24px] py-[20px] relative shrink-0 w-[1616px]" data-name="Card-footer">
          <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0" data-name="Pagination">
            <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px]">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="relative size-[24px]" data-name="Icons">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons} />
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
            <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px]">
              <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#172537] text-[14px] text-center w-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                3
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
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Empty" />
          <div className="content-stretch flex flex-col items-center pr-[10px] relative shrink-0" data-name="Number of rules">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Input & Select">
              <div className="bg-white content-stretch flex gap-[4px] items-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 w-[58px]" data-name="Frame">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular'] font-normal h-[16px] justify-center leading-[0] min-w-px relative text-[#141f2f] text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[16px]">10</p>
                </div>
                <div className="relative shrink-0 size-[16px]" data-name="chevron-down_16px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown16Px} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[16px] relative shrink-0 text-[#5f6772] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                1 - 10 of 200
              </p>
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

These styles are contained in the design: Gray/100: #141F2F, H1 / Bold: Font(family: "Roboto", style: Bold, size: 16, weight: 700, lineHeight: 20, letterSpacing: 0), Gray/60: #79818B, P/Medium: Font(family: "Roboto", style: Medium, size: 14, weight: 500, lineHeight: 20, letterSpacing: 0), White: #FFFFFF, Blue Light/100: #5D9AF4, Tittle 1 / Medium: Font(family: "Roboto", style: Medium, size: 24, weight: 500, lineHeight: 28, letterSpacing: 0), Gray/20: #DEE0E3, Caption 1/Medium: Font(family: "Roboto", style: Medium, size: 13, weight: 500, lineHeight: 16, letterSpacing: 0), Transparent: #D9D9D9, Gray/70: #5F6772, P/Regular: Font(family: "Roboto", style: Regular, size: 14, weight: 400, lineHeight: 20, letterSpacing: 0), Red/100: #E61E43, Caption 1 / Regular: Font(family: "Roboto", style: Regular, size: 13, weight: 400, lineHeight: 16, letterSpacing: 0), Bg-gray-light: #F1F2F3.
Component descriptions: The following components have usage descriptions or documentation links defined in Figma. These descriptions provide important context about the intended usage, best practices, and any constraints for each component. Follow these guidelines when implementing or using these components.

## button--light-primary

**v**2.2.0
==========

## btn-icon--light-primary

**v**2.2.0
==========
```
