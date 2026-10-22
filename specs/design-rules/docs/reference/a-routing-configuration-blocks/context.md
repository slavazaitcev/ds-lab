---
title: Эталонный код — «Routing Configurations / Table» — конфигурация (блоки)
summary: Сырой эталонный код экрана A «Routing Configurations / Table» (конфигурация, блоки): геометрия, цвета, шрифты и тексты как есть.
read_when:
  - Нужны точные значения экрана конфигурации A в коде: размеры, отступы, цвета, шрифты.
related:
  - ./screen.md
---
Эталонный код экрана в виде fenced-блока `tsx`. Это сырой код, снятый из макетов: точные размеры, отступы, цвета, шрифты и тексты как есть, без правок. Разбор экрана словами — [screen.md](screen.md).

```tsx
const imgIcons24Px = "";
const imgIconRoute24Px = "";
const imgIconEyeOff24Px = "";
const imgIconPlus24Px = "";
const imgIconPencil24Px = "";
const imgIconSearch24Px = "";
const imgIconChevronDown24Px = "";
const imgIconEdit24Px = "";
const imgIconChevronRight24Px = "";
const imgIconTrash24Px = "";
const imgIconTrash24Px1 = "";
const imgIcons = "";
const imgFrame1057 = "";
const imgIcons1 = "";
const imgChevronDown16Px = "";

export default function RoutingConfigurationsTable() {
  return (
    <div className="bg-[#f1f2f3] content-stretch flex items-start relative size-full" data-name="Routing Configurations / Table">
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
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px pb-[24px] pt-[20px] px-[24px] relative self-stretch" data-name="Content">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
          <a className="content-stretch cursor-pointer flex gap-[16px] items-center relative shrink-0 w-full" data-name="Breadcrumbs">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Breadcrumbs Container">
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#141f2f] text-[24px] text-left whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p>
                  <span className="leading-[28px] text-[#5d9af4]">{`Routing Configurations -> Node A`}</span>
                  <span className="leading-[28px]">{` -> Config_05`}</span>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
              <div className="bg-[rgba(217,217,217,0)] border border-[#5d9af4] border-solid content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="button--light-primary">
                <div className="relative shrink-0 size-[16px]" data-name="Icon / pencil_24px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPlus24Px} />
                </div>
                <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[16px] relative shrink-0 text-[#5d9af4] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Add Block
                </p>
              </div>
              <div className="bg-[rgba(217,217,217,0)] border border-[#5d9af4] border-solid content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="button--light-primary">
                <div className="relative shrink-0 size-[16px]" data-name="Icon / pencil_24px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPencil24Px} />
                </div>
                <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[16px] relative shrink-0 text-[#5d9af4] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Edit Configuration
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="input--light-secondary">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-layout">
                  <div className="bg-white border border-solid border-white content-stretch flex gap-[8px] items-center px-[8px] relative rounded-[4px] shrink-0 w-full" data-name="input-container">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon / calendar-month_24px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch24Px} />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[6px] relative" data-name="input">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[16px] min-w-px overflow-hidden relative text-[#79818b] text-[13px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Поиск
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#dee0e3] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative rounded-[8px] shrink-0 w-[1616px]">
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative self-stretch">
              <div className="content-stretch flex h-full items-center relative shrink-0">
                <div className="content-stretch flex items-start relative shrink-0" data-name="Right Icon">
                  <div className="relative shrink-0 size-[36px]" data-name="Icon Buttons">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Icon / pencil_24px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown24Px} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#141f2f] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Initial Routing
                  </p>
                </div>
              </div>
              <a className="content-stretch cursor-pointer flex gap-[10px] items-start relative shrink-0" data-name="Right Icon">
                <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                  <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0 w-[1616px]" data-name="Table & actions">
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
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Name
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative shrink-0 w-full" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Routing Keys
                    </p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Adjacent Host
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[103px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        AppID
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[122px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        CommandCode
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[144px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Destination-Realm
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Origin-Host
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Origin-Realm
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[146px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        IMSI
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative shrink-0 w-full" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Actions
                    </p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[121px]" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] w-[440px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Route
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[121px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Alt Route
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative shrink-0 w-full" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
                      AVP Management
                    </p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[107px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Replacement
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] w-[440px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Swap
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative shrink-0 w-full" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Options
                    </p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[74px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Session Binding
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[70px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        SLF
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row 1">
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                    <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Rule_Alpha
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      host-a.example.org
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[103px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      3GPP Rx
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[122px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      316
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[144px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      REALM-A.EXAMPLE.ORG
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[146px]" data-name="table-cell">
                    <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px] mb-0">000000000000000|</p>
                      <p className="leading-[20px]">000000000000001</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Rule_name
                    </p>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      host-b.example.org
                    </p>
                    <div className="bg-[#dfebfd] content-stretch flex flex-col items-center justify-center p-[3px] relative rounded-[20px] shrink-0" data-name="Counter">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[14px] overflow-hidden relative shrink-0 size-[14px] text-[#141f2f] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        3
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[107px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[65px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[74px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[70px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row 2">
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                    <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Rule_Beta
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      host-a.example.org
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[103px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      3GPP MM10
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[122px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      318
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[144px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      REALM-A.EXAMPLE.ORG
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[146px]" data-name="table-cell">
                    <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px] mb-0">0000000.0000000</p>
                      <p className="leading-[20px]">000000000000000...</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Action_Alpha
                    </p>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      host-b.example.org
                    </p>
                    <div className="bg-[#dfebfd] content-stretch flex flex-col items-center justify-center p-[3px] relative rounded-[20px] shrink-0" data-name="Counter">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[14px] overflow-hidden relative shrink-0 size-[14px] text-[#141f2f] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        3
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[107px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[65px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[74px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[70px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row 3">
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                    <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      3
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Rule_Gamma
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[103px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Relay
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[122px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      323
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[144px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      REALM-B.EXAMPLE.ORG
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[146px]" data-name="table-cell">
                    <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px] mb-0">000000000000002|</p>
                      <p className="leading-[20px]">000000000000003</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[#141f2f] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px] mb-0">{`Redirect: `}</p>
                      <p className="leading-[20px]">host-c.example.org</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[107px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[65px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[74px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[70px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      No
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row 4">
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                    <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      4
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Rule_Theta
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      host-a.example.org
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[103px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      3GPP Gx
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[122px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      322
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[144px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      REALM-C.EXAMPLE.ORG
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[146px]" data-name="table-cell">
                    <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px] mb-0">000000000000004|</p>
                      <p className="leading-[20px]">000000000000005</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      host-b.example.org
                    </p>
                    <div className="bg-[#dfebfd] content-stretch flex flex-col items-center justify-center p-[3px] relative rounded-[20px] shrink-0" data-name="Counter">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[14px] overflow-hidden relative shrink-0 size-[14px] text-[#141f2f] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                        4
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[107px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[65px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[74px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      No
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[70px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#dee0e3] border-solid content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full">
          <div className="bg-white border border-[#dee0e3] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="SCCP">
            <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full">
              <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-full" data-name="Title">
                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                  <div className="content-stretch flex items-center relative shrink-0">
                    <div className="relative shrink-0 size-[32px]" data-name="Icon Buttons">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Icon / chevron-right_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronRight24Px} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#141f2f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px]">IMEISV Normalisation</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0">
                    <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
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
        <div className="bg-white border border-[#dee0e3] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative rounded-[8px] shrink-0 w-[1616px]">
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative self-stretch">
              <div className="content-stretch flex h-full items-center relative shrink-0">
                <div className="content-stretch flex items-start relative shrink-0" data-name="Right Icon">
                  <div className="relative shrink-0 size-[36px]" data-name="Icon Buttons">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Icon / pencil_24px">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown24Px} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#141f2f] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Gx Routing
                  </p>
                </div>
              </div>
              <a className="content-stretch cursor-pointer flex items-start relative shrink-0" data-name="Right Icon">
                <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                  <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                  </div>
                </div>
                <div className="relative shrink-0 size-[36px]" data-name="Icon Buttons">
                  <div className="absolute inset-[22.22%]" data-name="Icon / pencil_24px">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px1} />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0 w-[1616px]" data-name="Table & actions">
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
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Name
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative shrink-0 w-full" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Routing Keys
                    </p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Adjacent Host
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[103px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        AppID
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[122px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        CommandCode
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[144px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Destination-Realm
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Origin-Host
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Origin-Realm
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[146px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        IMSI
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[242px]">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative shrink-0 w-full" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Actions
                    </p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[36px] items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] w-[440px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Route
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative shrink-0 w-full" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
                      AVP Management
                    </p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[107px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Replacement
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0" data-name="table-cell">
                      <p className="[word-break:break-word] font-['Roboto:Medium'] font-medium leading-[20px] relative shrink-0 text-[#5f6772] text-[14px] w-[440px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Swap
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative shrink-0 w-full" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Options
                    </p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[74px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Session Binding
                      </p>
                    </div>
                    <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[8px] relative shrink-0 w-[70px]" data-name="table-cell">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium'] font-medium leading-[20px] min-w-px relative text-[#5f6772] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        SLF
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row 1">
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                    <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      1
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Action_Gamma
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      host-a.example.org
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[103px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      3GPP Pr
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[122px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      316
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[144px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      REALM-A.EXAMPLE.ORG
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[146px]" data-name="table-cell">
                    <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px] mb-0">000000000000000|</p>
                      <p className="leading-[20px]">000000000000001</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Rule_name
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[107px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[65px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[74px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[70px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row 2">
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                    <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      2
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Action_Beta
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[103px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      3GPP Nta
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[122px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      318
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[144px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      service-a
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[146px]" data-name="table-cell">
                    <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px] mb-0">0000000.0000000</p>
                      <p className="leading-[20px]">000000000000000...</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Action_Alpha
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[107px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      No
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[65px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[74px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[70px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row 3">
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[33px]" data-name="table-cell">
                    <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] relative shrink-0 text-[#141f2f] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      3
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[132px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[103px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Relay
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[122px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      323
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[144px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[123px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      -
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[146px]" data-name="table-cell">
                    <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px] mb-0">000000000000002|</p>
                      <p className="leading-[20px]">000000000000003</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px px-[12px] py-[8px] relative" data-name="table-cell">
                    <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[0] min-w-px relative text-[#141f2f] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[20px] mb-0">{`Redirect: `}</p>
                      <p className="leading-[20px]">host-c.example.org</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[107px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[65px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[74px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Yes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="border-[#dee0e3] border-b border-r border-solid content-stretch flex gap-[8px] h-full items-center px-[12px] py-[8px] relative shrink-0 w-[70px]" data-name="table-cell">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular'] font-normal leading-[20px] min-w-px relative text-[#141f2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      No
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#dee0e3] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="SCCP">
          <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full">
            <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-full" data-name="Title">
              <div className="relative shrink-0 size-[32px]" data-name="Icon Buttons">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Icon / chevron-right_24px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronRight24Px} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#141f2f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">Routing 3</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#dee0e3] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="SCCP">
          <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full">
            <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-full" data-name="Title">
              <div className="relative shrink-0 size-[32px]" data-name="Icon Buttons">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Icon / chevron-right_24px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronRight24Px} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#141f2f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[20px]">S6</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit24Px} />
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="btn-icon--light-primary">
                <div className="relative shrink-0 size-[20px]" data-name="Icon / pencil_24px">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash24Px} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center px-[24px] py-[20px] relative shrink-0 w-full" data-name="Card-footer">
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

These styles are contained in the design: Gray/100: #141F2F, H1 / Bold: Font(family: "Roboto", style: Bold, size: 16, weight: 700, lineHeight: 20, letterSpacing: 0), Gray/60: #79818B, P/Medium: Font(family: "Roboto", style: Medium, size: 14, weight: 500, lineHeight: 20, letterSpacing: 0), White: #FFFFFF, Blue Light/100: #5D9AF4, Tittle 1 / Medium: Font(family: "Roboto", style: Medium, size: 24, weight: 500, lineHeight: 28, letterSpacing: 0), Caption 1/Medium: Font(family: "Roboto", style: Medium, size: 13, weight: 500, lineHeight: 16, letterSpacing: 0), Transparent: #D9D9D9, Caption 1/Regular: Font(family: "Roboto", style: Regular, size: 13, weight: 400, lineHeight: 16, letterSpacing: 0), Headline /  Medium: Font(family: "Roboto", style: Medium, size: 16, weight: 500, lineHeight: 20, letterSpacing: 0), Gray/70: #5F6772, Gray/20: #DEE0E3, P/Regular: Font(family: "Roboto", style: Regular, size: 14, weight: 400, lineHeight: 20, letterSpacing: 0), Caption 2 / Regular: Font(family: "Roboto", style: Regular, size: 12, weight: 400, lineHeight: 14, letterSpacing: 0), Blue Light / 20: #DFEBFD, Red/100: #E61E43, Caption 1 / Regular: Font(family: "Roboto", style: Regular, size: 13, weight: 400, lineHeight: 16, letterSpacing: 0), Bg-gray-light: #F1F2F3.
Component descriptions: The following components have usage descriptions or documentation links defined in Figma. These descriptions provide important context about the intended usage, best practices, and any constraints for each component. Follow these guidelines when implementing or using these components.

## button--light-primary

**v**2.2.0
==========

## input--light-secondary

**v2.3.0**
==========

## btn-icon--light-primary

**v**2.2.0
==========
```
