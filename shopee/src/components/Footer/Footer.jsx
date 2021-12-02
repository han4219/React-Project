import React from 'react'
import * as style from './footer.style'
export default function Footer() {
  return (
    <style.Footer>
      <div className="container">
        <style.FooterTop>
          <style.Col1>
            <h3>chăm sóc khách hàng</h3>
            <style.LinkTag to="/register">trung tâm trợ giúp</style.LinkTag>
            <style.LinkTag to="/register">shopee blog</style.LinkTag>
            <style.LinkTag to="/register">shopee mall</style.LinkTag>
            <style.LinkTag to="/register">hướng dẫn mua hàng</style.LinkTag>
            <style.LinkTag to="/register">hướng dẫn bán hàng</style.LinkTag>
            <style.LinkTag to="/register">thanh toán</style.LinkTag>
            <style.LinkTag to="/register">shopee xu</style.LinkTag>
            <style.LinkTag to="/register">vận chuyển</style.LinkTag>
            <style.LinkTag to="/register">trả hàng & hoàn tiền</style.LinkTag>
            <style.LinkTag to="/register">chăm sóc khách hàng</style.LinkTag>
            <style.LinkTag to="/register">chính sách bảo hành</style.LinkTag>
          </style.Col1>
          <style.Col2>
            <h3>về shopee</h3>
            <style.LinkTag to="/register">
              giới thiệu về shopee việt nam
            </style.LinkTag>
            <style.LinkTag to="/register">tuyển dụng</style.LinkTag>
            <style.LinkTag to="/register">điều khoản shopee</style.LinkTag>
            <style.LinkTag to="/register">chính sách bảo mật</style.LinkTag>
            <style.LinkTag to="/register">chính hãng</style.LinkTag>
            <style.LinkTag to="/register">kênh người bán</style.LinkTag>
            <style.LinkTag to="/register">flash sales</style.LinkTag>
            <style.LinkTag to="/register">
              chương trình tiếp thị liên kết shopee
            </style.LinkTag>
            <style.LinkTag to="/register">
              liên hệ với truyền thông
            </style.LinkTag>
          </style.Col2>
          {/* start col 3 */}
          <style.Col3>
            <style.Col3Top>
              <h3>thanh toán</h3>
              <style.UL>
                <style.LI>
                  <style.Visa></style.Visa>
                </style.LI>
                <style.LI>
                  <style.JCB></style.JCB>
                </style.LI>
                <style.LI>
                  <style.MauXanh></style.MauXanh>
                </style.LI>
                <style.LI>
                  <style.COD></style.COD>
                </style.LI>
                <style.LI>
                  <style.TraGop></style.TraGop>
                </style.LI>
                <style.LI>
                  <style.ShopeePay></style.ShopeePay>
                </style.LI>
              </style.UL>
            </style.Col3Top>
            <style.Col3Bottom>
              <h3>đơn vị vận chuyển</h3>
              <style.UL>
                <style.LI>
                  <style.Express></style.Express>
                </style.LI>
                <style.LI>
                  <style.GHTK></style.GHTK>
                </style.LI>
                <style.LI>
                  <style.GHN></style.GHN>
                </style.LI>
                <style.LI>
                  <style.ViettelPost></style.ViettelPost>
                </style.LI>
                <style.LI>
                  <style.VietNamPost></style.VietNamPost>
                </style.LI>
                <style.LI>
                  <style.JTExpress></style.JTExpress>
                </style.LI>
                <style.LI>
                  <style.GrabExpress></style.GrabExpress>
                </style.LI>
                <style.LI>
                  <style.Ninja></style.Ninja>
                </style.LI>
                <style.LI>
                  <style.BestExpress></style.BestExpress>
                </style.LI>
              </style.UL>
            </style.Col3Bottom>
          </style.Col3>
          {/* end col 3 */}

          {/* start col 4 */}
          <style.Col4>
            <h3>theo dõi chúng tôi trên</h3>
            <style.UL className="social">
              <style.LI>
                <style.LinkTag to="/register">
                  <style.Facebook></style.Facebook>
                  <div style={{ 'margin-top': '1rem' }}>Facebook</div>
                </style.LinkTag>
              </style.LI>
              <style.LI>
                <style.LinkTag to="/register">
                  <style.Instagram></style.Instagram>
                  <div style={{ 'margin-top': '1rem' }}>Instagram</div>
                </style.LinkTag>
              </style.LI>
              <style.LI>
                <style.LinkTag to="/register">
                  <style.LinkedIn></style.LinkedIn>
                  <div style={{ 'margin-top': '1rem' }}>LinkedIn</div>
                </style.LinkTag>
              </style.LI>
            </style.UL>
          </style.Col4>
          {/* end col 4 */}
        </style.FooterTop>
        <style.FooterBottom>
          <style.FooterBottom1>
            <div>© 2021 Shopee. Tất cả các quyền được bảo lưu.</div>
            <style.DangKy></style.DangKy>
            <style.Language>
              Ngôn ngữ:
              <span>Tiếng Việt</span>
              <span>Tiếng Anh</span>
            </style.Language>
          </style.FooterBottom1>
          <style.FooterBottom2>
            <div>Công ty TNHH Shopee</div>
            <div>
              Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
              Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng
              đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
            </div>
            <div>
              Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại
              liên hệ: 024 73081221 (ext 4678)
            </div>
            <div>
              Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội
              cấp lần đầu ngày 10/02/2015
            </div>
            <div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
          </style.FooterBottom2>
        </style.FooterBottom>
      </div>
    </style.Footer>
  )
}
