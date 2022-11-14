USE [master]
GO
/****** Object:  Database [flowerSHOP_HDV]    Script Date: 21/05/2022 10:32:06 ******/
CREATE DATABASE [flowerSHOP_HDV]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'flowerSHOP_HDV', FILENAME = N'D:\HK\4-2\HuongDichVu\flowerSHOP_HDV.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'flowerSHOP_HDV_log', FILENAME = N'D:\HK\4-2\HuongDichVu\flowerSHOP_HDV_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [flowerSHOP_HDV] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [flowerSHOP_HDV].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [flowerSHOP_HDV] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET ARITHABORT OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [flowerSHOP_HDV] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [flowerSHOP_HDV] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET  DISABLE_BROKER 
GO
ALTER DATABASE [flowerSHOP_HDV] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [flowerSHOP_HDV] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET RECOVERY FULL 
GO
ALTER DATABASE [flowerSHOP_HDV] SET  MULTI_USER 
GO
ALTER DATABASE [flowerSHOP_HDV] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [flowerSHOP_HDV] SET DB_CHAINING OFF 
GO
ALTER DATABASE [flowerSHOP_HDV] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [flowerSHOP_HDV] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [flowerSHOP_HDV] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'flowerSHOP_HDV', N'ON'
GO
USE [flowerSHOP_HDV]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 21/05/2022 10:32:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
	[parent_id] [int] NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Color]    Script Date: 21/05/2022 10:32:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Color](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Color] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[flower]    Script Date: 21/05/2022 10:32:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[flower](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
	[price] [decimal](15, 0) NOT NULL,
	[contents] [nvarchar](max) NULL,
	[discount] [int] NULL,
	[views] [int] NULL,
	[created] [datetime] NOT NULL,
	[updated] [datetime] NULL,
	[isDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_flower] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[flower_Category]    Script Date: 21/05/2022 10:32:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[flower_Category](
	[idflower] [int] NOT NULL,
	[idCategory] [int] NOT NULL,
 CONSTRAINT [PK_flower_Category] PRIMARY KEY CLUSTERED 
(
	[idflower] ASC,
	[idCategory] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[flower_Color]    Script Date: 21/05/2022 10:32:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[flower_Color](
	[idflower] [int] NOT NULL,
	[idColor] [int] NOT NULL,
 CONSTRAINT [PK_flower_Color] PRIMARY KEY CLUSTERED 
(
	[idflower] ASC,
	[idColor] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Image]    Script Date: 21/05/2022 10:32:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Image](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[image] [varchar](max) NOT NULL,
	[imgDetail] [nvarchar](max) NULL,
	[idflower] [int] NOT NULL,
	[isDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_Image] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Order]    Script Date: 21/05/2022 10:32:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[transactionID] [int] NOT NULL,
	[idflower] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[amount] [decimal](15, 0) NOT NULL,
	[created] [datetime] NOT NULL,
	[updated] [datetime] NULL,
	[status] [bit] NOT NULL,
	[isCanceled] [bit] NOT NULL,
 CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Role]    Script Date: 21/05/2022 10:32:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[roleName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Table_1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ShopCart]    Script Date: 21/05/2022 10:32:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShopCart](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userID] [int] NOT NULL,
	[idflower] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[amount] [decimal](15, 0) NOT NULL,
	[created] [datetime] NOT NULL,
	[updated] [datetime] NULL,
	[isOrdered] [bit] NOT NULL,
 CONSTRAINT [PK_ShopCart_1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Transaction]    Script Date: 21/05/2022 10:32:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Transaction](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userID] [int] NOT NULL,
	[customerName] [nvarchar](50) NOT NULL,
	[customerEmail] [varchar](50) NOT NULL,
	[customerPhone] [varchar](10) NOT NULL,
	[customerAddress] [nvarchar](max) NOT NULL,
	[amount] [decimal](15, 0) NOT NULL,
	[message] [nvarchar](max) NULL,
	[created] [datetime] NOT NULL,
	[updated] [datetime] NULL,
	[status] [bit] NOT NULL,
	[note] [nvarchar](max) NULL,
	[isCanceled] [bit] NOT NULL,
 CONSTRAINT [PK_Transaction] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[User]    Script Date: 21/05/2022 10:32:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[User](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[phone] [varchar](10) NOT NULL,
	[address] [nvarchar](100) NOT NULL,
	[password] [varchar](100) NOT NULL,
	[created] [datetime] NOT NULL,
	[updated] [datetime] NULL,
	[isDeleted] [bit] NOT NULL,
	[idRole] [int] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[Category] ON 

INSERT [dbo].[Category] ([id], [name], [parent_id]) VALUES (1, N'Khác', NULL)
INSERT [dbo].[Category] ([id], [name], [parent_id]) VALUES (2, N'flower acoustic', NULL)
INSERT [dbo].[Category] ([id], [name], [parent_id]) VALUES (3, N'flower classic', NULL)
INSERT [dbo].[Category] ([id], [name], [parent_id]) VALUES (4, N'Flamenco flower', NULL)
INSERT [dbo].[Category] ([id], [name], [parent_id]) VALUES (5, N'flower Hawaii', NULL)
INSERT [dbo].[Category] ([id], [name], [parent_id]) VALUES (6, N'flower điện', NULL)
INSERT [dbo].[Category] ([id], [name], [parent_id]) VALUES (7, N'flower bass', NULL)
SET IDENTITY_INSERT [dbo].[Category] OFF
SET IDENTITY_INSERT [dbo].[Color] ON 

INSERT [dbo].[Color] ([id], [name]) VALUES (1, N'Đỏ')
INSERT [dbo].[Color] ([id], [name]) VALUES (2, N'Cam')
INSERT [dbo].[Color] ([id], [name]) VALUES (3, N'Vàng')
INSERT [dbo].[Color] ([id], [name]) VALUES (4, N'Lục')
INSERT [dbo].[Color] ([id], [name]) VALUES (5, N'Lam')
INSERT [dbo].[Color] ([id], [name]) VALUES (6, N'Chàm')
INSERT [dbo].[Color] ([id], [name]) VALUES (7, N'Tím')
INSERT [dbo].[Color] ([id], [name]) VALUES (8, N'Hồng')
INSERT [dbo].[Color] ([id], [name]) VALUES (9, N'Trắng')
INSERT [dbo].[Color] ([id], [name]) VALUES (10, N'Khác')
SET IDENTITY_INSERT [dbo].[Color] OFF
SET IDENTITY_INSERT [dbo].[flower] ON 

INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (1, N'flower Acoustic Station HD-119', CAST(1290000 AS Decimal(15, 0)), N'Đàn được làm hoàn toàn từ gỗ nguyên miếng, sử dụng càng lâu âm thanh càng hay, đó là đặc điểm nổi bật nhất của đàn Việt Nam so với đa số các dòng đàn nước ngoài khác.', 0, 100, CAST(N'2022-01-26 17:54:21.077' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (2, N'Capo Musedo – MC1', CAST(200000 AS Decimal(15, 0)), N'Capo Musedo MC-1 có thời gian sử dụng rất lâu. Miếng đệm cao su có tính đàn hồi tốt, có khả năng đàn hồi về hình dáng ban đầu.', 0, 101, CAST(N'2022-01-26 17:54:21.077' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (3, N'Capo Đàn flower Classic & Acoustic Musedo MC-4', CAST(200000 AS Decimal(15, 0)), N'Thiết kế bản kẹp dài, độ mở rộng sẽ vừa vặn với tất cả các cây đàn Classic. Lớp cao su bền bỉ, rất khó chai, khiến capo có độ bền tuyệt vời. Lò xo chất lượng khiến capo kẹp chặt hơn vào cần đàn.', 25, 100, CAST(N'2022-01-26 17:54:21.080' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (4, N'Capo flower Acoustic Vân Gỗ Leson', CAST(500000 AS Decimal(15, 0)), N'Capo đàn flower của thương hiệu LESON với thiết kế cổ điển cùng với lớp vân gỗ sang trọng. Một phụ kiện không thể thiếu của các bạn chơi đàn sẽ làm cho các bạn cảm thấy thích thú cũng như hài long với thiết kế cũng như chất liệu mà LESON mang lại.', 10, 100, CAST(N'2022-01-26 17:54:21.080' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (5, N'Dây Đeo flower & Ukulele Độc Đáo', CAST(100000 AS Decimal(15, 0)), N'Đối với các bạn chơi flower thường xuyên đi diễn thì dây đeo là một phụ kiện không thể thiếu, là một vật bất ly thân mỗi khi bạn chạy show. Hoặc bạn đang muốn tìm kiếm 1 sợi dây đeo hỗ trợ việc chơi flower và ukulele được thoải mái hơn thì GS có rất nhiều mẫu mã khác nhau cho các bạn lựa chọn.', 15, 100, CAST(N'2022-01-26 17:54:21.080' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (6, N'Dây D’Addario EJ13 – Acoustic', CAST(120000 AS Decimal(15, 0)), N'Dây đàn EJ13 là một sự kết hợp giữa sự thoải mái và th Hoa chính là món quà tuyệt vời có tác dụng tích cực đến cảm xúc của mỗi con người. Tặng nhau dù chỉ là một bông hoa cũng làm cho người nhận cảm thấy vô cùng hạnh phúc và ý nghĩa. Bó hoa xinh đẹp rạng ngời trong ngày sinh nhật chính là bí quyết giúp cho người nhận cảm thấy vui vẻ và hạnh phúc hơn rất nhiều. Có thể nói rằng việc tặng hoa sinh nhật sẽ góp phần tăng thêm niềm vu và mang đến sự quan tâm chân thành cho mọi đối tượng.', 15, 32, CAST(N'2022-01-26 17:54:21.080' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (7, N'TANGLEWOOD TW4 KOA', CAST(9500000 AS Decimal(15, 0)), N'Đàn flower Tanglewood TW4 KOA được thiết kế bởi hãng TANGLEWOOD một thương hiệu đến từ Vương Quốc Anh, được thành lập tại London vào năm 1988. Năm 2005, công ty bắt đầu phân phối sản phẩm của họ tại Hoa Kỳ. TANGLEWOOD đã nhận được giải thưởng doanh số từ tạp chí MI Pro Trade vào các năm 2007, 2008 và 2009.', 0, 109, CAST(N'2022-01-26 17:54:21.080' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (8, N'flower Acoustic Station GS-99-Black', CAST(1750000 AS Decimal(15, 0)), N'Nếu bạn đang tìm kiếm một cây đàn với ngoại hình đẹp ấn tượng, âm thanh vang sáng dành cho người mới chơi thì dòng Acoustic Station GS99 này chắc chắn dành cho bạn rồi đấy.', 0, 109, CAST(N'2022-01-26 17:54:21.080' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (9, N'flower Acoustic Station HD-179_FA', CAST(1900000 AS Decimal(15, 0)), N'Dòng đàn STATION HD179_FA chuyên dành riêng cho những bạn vừa mới bắt đầu chơi và xác định rằng mình sẽ chơi và tập luyện lâu dài thì STATION HD179_FA chính là một sự lựa chọn tối ưu về giá cả và chất lượng. So với dòng STATION HD179 thì STATION HD179_FA có sự nâng cấp về phần mặt trước với vẻ ngoài siêu ấn tượng, chắc hẳn những tâm hồn cá tính sẽ khó lòng cưỡng lại vẻ đẹp của chiếc đàn này với đầy những ưu điểm:', 0, 109, CAST(N'2022-01-26 17:54:21.080' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (10, N'flower Classic Station C-199', CAST(1990000 AS Decimal(15, 0)), N'Đây là dòng dàn chuyên dùng cho các bạn mới bắt đâu tập chơi solo, âm thanh ngấm và trầm, phù hợp với các bản solo cổ điển.', 0, 89, CAST(N'2022-01-26 17:54:21.080' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (11, N'flower Acoustic Station GS-99-Sunbust', CAST(400000 AS Decimal(15, 0)), N'Nếu bạn đang tìm kiếm một cây đàn với ngoại hình đẹp ấn tượng, âm thanh vang sáng dành cho người mới chơi thì dòng Acoustic Station GS99 này chắc chắn dành cho bạn rồi đấy.', 0, 764, CAST(N'2022-01-26 17:54:21.083' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (12, N'flower Acoustic Station GS-99-NA', CAST(1500000 AS Decimal(15, 0)), N'Không còn gì tuyệt vời hơn một cây đàn với chất lượng và ưu đãi đi kèm rất hấp dẫn cho người mới chơi như dòng STATION GS99 này đâu.', 0, 673, CAST(N'2022-01-26 17:54:21.083' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (13, N'flower Classic Admira Malaga', CAST(5500000 AS Decimal(15, 0)), N'flower ADMIRA MALAGA với thông số gỗ TOP SOLID, được làm thủ công tại TÂY BAN NHA, nơi sản sinh ra những cây đàn flower đầu tiên. ', 0, 34, CAST(N'2022-01-26 17:54:21.083' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (14, N'flower Acoustic EKO ONE 018 CW EQ Sunbust', CAST(5000000 AS Decimal(15, 0)), N'Đàn flower ONE 018 CW EQ, ngoài tính thẩm mỹ cực kỳ hấp dẫn được lấy cảm hứng từ dòng đàn bất hủ EKO 018 CW Eq thì còn được nâng cấp một số chi tiết độc đáo chưa từng thấy trước đây:', 0, 784, CAST(N'2022-01-26 17:54:21.083' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (15, N'flower Acoustic Station HD-219_FA', CAST(3500000 AS Decimal(15, 0)), N'STATION HD219_FA chính là sự nâng cấp về ngoại hình và gia công so với dòng anh chị của nó là STATION HD199A. Nếu bạn đã trót đam mê vẻ đẹp của màu gỗ tối như STATION HD179_FA mà lại thích âm thanh dày dặn, ấm áp của STATION HD199A thì STATION HD219_FA chính là sự kết hợp hoàn hảo cho bạn đấy:', 0, 893, CAST(N'2022-01-26 17:54:21.083' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (16, N'flower Acoustic Enya X1', CAST(10000 AS Decimal(15, 0)), N'flower Acoustic Enya X1 là dòng đàn có cấu hình rất tốt với chi tiết gia công vô cùng kĩ mỉ, action thấp và êm. Đặc biệt cần đàn tháo lắp rất là linh hoạt, tiện lợi cho việc vận chuyển đàn khi đi xa.', 0, 289, CAST(N'2022-01-26 17:54:21.083' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (17, N'flower Acoustic Peavey DW3', CAST(6000000 AS Decimal(15, 0)), N'Body dáng OM gọn gàng, EQ EKO G03 tích hợp Tuner . Âm thanh tròn trịa, sáng rõ nhưng không kém phần dày dặn.Thiết kế sơn bóng, có ti chỉnh chống cong cần, bo viền cạnh tròn trịa, không làm hằn vết lên tay sau khi ôm đàn.', 0, 234, CAST(N'2022-01-26 17:54:21.083' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (18, N'flower Classic Admira Malaga CW', CAST(5300000 AS Decimal(15, 0)), N'flower ADMIRA MALAGA với thông số gỗ TOP SOLID, được làm thủ công tại TÂY BAN NHA, nơi sản sinh ra những cây đàn flower đầu tiên. ', 10, 283, CAST(N'2022-01-26 17:54:21.083' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (19, N'flower Acoustic STATION CC-269', CAST(7000000 AS Decimal(15, 0)), N'Đàn được làm hoàn toàn từ gỗ nguyên miếng (full solid), sử dụng càng lâu âm thanh càng hay, đó là đặc điểm "ăn tiền" của gỗ nguyên miếng.', 0, 489, CAST(N'2022-01-26 17:54:21.087' AS DateTime), NULL, 0)
INSERT [dbo].[flower] ([id], [name], [price], [contents], [discount], [views], [created], [updated], [isDeleted]) VALUES (20, N'flower Acoustic EKO-EQ-Blue-OM', CAST(4000000 AS Decimal(15, 0)), N'Với chất liệu 100% làm từ gỗ chất lượng, những cây đàn tại flower Station đảm bảo mang lại cho bạn trải nghiệm chơi đàn tốt nhất.', 10, 123, CAST(N'2022-01-26 17:54:21.087' AS DateTime), NULL, 0)
SET IDENTITY_INSERT [dbo].[flower] OFF
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (1, 4)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (2, 4)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (3, 4)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (4, 4)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (5, 7)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (6, 7)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (7, 7)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (8, 7)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (9, 5)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (9, 6)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (10, 5)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (10, 6)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (11, 5)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (11, 6)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (12, 5)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (12, 6)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (13, 5)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (14, 5)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (15, 5)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (16, 5)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (17, 5)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (18, 5)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (19, 5)
INSERT [dbo].[flower_Category] ([idflower], [idCategory]) VALUES (20, 5)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (1, 8)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (1, 9)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (2, 2)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (2, 8)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (3, 1)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (3, 2)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (4, 1)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (4, 2)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (4, 8)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (5, 1)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (5, 2)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (6, 1)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (6, 2)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (7, 1)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (7, 2)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (8, 1)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (8, 2)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (9, 1)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (9, 2)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (10, 1)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (10, 2)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (10, 3)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (11, 1)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (11, 9)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (12, 1)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (12, 4)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (12, 6)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (13, 1)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (13, 9)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (14, 1)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (14, 2)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (14, 6)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (14, 9)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (15, 9)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (16, 1)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (16, 2)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (17, 1)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (17, 2)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (18, 5)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (18, 9)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (19, 2)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (20, 2)
INSERT [dbo].[flower_Color] ([idflower], [idColor]) VALUES (20, 9)
SET IDENTITY_INSERT [dbo].[Image] ON 

INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (1, N'dan1.jpg', NULL, 1, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (2, N'dan2.jpg', NULL, 2, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (3, N'dan3.jpg', NULL, 3, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (4, N'dan4.jpg', NULL, 4, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (5, N'dan5.jpg', NULL, 5, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (6, N'dan6.jpg', NULL, 6, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (7, N'dan7.jpg', NULL, 7, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (8, N'dan8.jpg', NULL, 8, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (9, N'dan9.jpg', NULL, 9, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (10, N'dan10.jpg', NULL, 10, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (11, N'dan11.jpg', NULL, 11, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (12, N'dan12.jpg', NULL, 12, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (13, N'dan13.jpg', NULL, 13, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (14, N'dan14.jpg', NULL, 14, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (15, N'dan15.jpg', NULL, 15, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (16, N'dan16.jpg', NULL, 16, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (17, N'dan17.jpg', NULL, 17, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (18, N'dan18.jpg', NULL, 18, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (19, N'dan19.jpg', NULL, 19, 0)
INSERT [dbo].[Image] ([id], [image], [imgDetail], [idflower], [isDeleted]) VALUES (20, N'dan20.jpg', NULL, 20, 0)
SET IDENTITY_INSERT [dbo].[Image] OFF
SET IDENTITY_INSERT [dbo].[Order] ON 

INSERT [dbo].[Order] ([id], [transactionID], [idflower], [quantity], [amount], [created], [updated], [status], [isCanceled]) VALUES (1, 1, 2, 2, CAST(500000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1, 0)
INSERT [dbo].[Order] ([id], [transactionID], [idflower], [quantity], [amount], [created], [updated], [status], [isCanceled]) VALUES (2, 2, 1, 1, CAST(300000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1, 0)
INSERT [dbo].[Order] ([id], [transactionID], [idflower], [quantity], [amount], [created], [updated], [status], [isCanceled]) VALUES (3, 2, 4, 2, CAST(90000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 0, 0)
INSERT [dbo].[Order] ([id], [transactionID], [idflower], [quantity], [amount], [created], [updated], [status], [isCanceled]) VALUES (4, 3, 1, 1, CAST(300000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 0, 0)
INSERT [dbo].[Order] ([id], [transactionID], [idflower], [quantity], [amount], [created], [updated], [status], [isCanceled]) VALUES (5, 4, 2, 8, CAST(400000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1, 0)
INSERT [dbo].[Order] ([id], [transactionID], [idflower], [quantity], [amount], [created], [updated], [status], [isCanceled]) VALUES (6, 5, 3, 1, CAST(75000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1, 0)
INSERT [dbo].[Order] ([id], [transactionID], [idflower], [quantity], [amount], [created], [updated], [status], [isCanceled]) VALUES (7, 5, 6, 2, CAST(135000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1, 0)
SET IDENTITY_INSERT [dbo].[Order] OFF
SET IDENTITY_INSERT [dbo].[Role] ON 

INSERT [dbo].[Role] ([id], [roleName]) VALUES (1, N'Quản Lý')
INSERT [dbo].[Role] ([id], [roleName]) VALUES (2, N'Nhân Viên')
INSERT [dbo].[Role] ([id], [roleName]) VALUES (3, N'Khách Hàng')
SET IDENTITY_INSERT [dbo].[Role] OFF
SET IDENTITY_INSERT [dbo].[ShopCart] ON 

INSERT [dbo].[ShopCart] ([id], [userID], [idflower], [quantity], [amount], [created], [updated], [isOrdered]) VALUES (2, 4, 1, 1, CAST(300000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1)
INSERT [dbo].[ShopCart] ([id], [userID], [idflower], [quantity], [amount], [created], [updated], [isOrdered]) VALUES (3, 4, 2, 2, CAST(500000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1)
INSERT [dbo].[ShopCart] ([id], [userID], [idflower], [quantity], [amount], [created], [updated], [isOrdered]) VALUES (4, 4, 3, 4, CAST(75000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 0)
INSERT [dbo].[ShopCart] ([id], [userID], [idflower], [quantity], [amount], [created], [updated], [isOrdered]) VALUES (5, 4, 4, 2, CAST(90000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1)
INSERT [dbo].[ShopCart] ([id], [userID], [idflower], [quantity], [amount], [created], [updated], [isOrdered]) VALUES (6, 4, 5, 1, CAST(8500 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 0)
INSERT [dbo].[ShopCart] ([id], [userID], [idflower], [quantity], [amount], [created], [updated], [isOrdered]) VALUES (7, 5, 1, 1, CAST(300000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1)
INSERT [dbo].[ShopCart] ([id], [userID], [idflower], [quantity], [amount], [created], [updated], [isOrdered]) VALUES (8, 6, 2, 8, CAST(500000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1)
INSERT [dbo].[ShopCart] ([id], [userID], [idflower], [quantity], [amount], [created], [updated], [isOrdered]) VALUES (9, 7, 3, 1, CAST(75000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1)
INSERT [dbo].[ShopCart] ([id], [userID], [idflower], [quantity], [amount], [created], [updated], [isOrdered]) VALUES (10, 5, 4, 9, CAST(90000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 0)
INSERT [dbo].[ShopCart] ([id], [userID], [idflower], [quantity], [amount], [created], [updated], [isOrdered]) VALUES (11, 6, 5, 1, CAST(8500 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 0)
INSERT [dbo].[ShopCart] ([id], [userID], [idflower], [quantity], [amount], [created], [updated], [isOrdered]) VALUES (12, 7, 6, 2, CAST(135000 AS Decimal(15, 0)), CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1)
SET IDENTITY_INSERT [dbo].[ShopCart] OFF
SET IDENTITY_INSERT [dbo].[Transaction] ON 

INSERT [dbo].[Transaction] ([id], [userID], [customerName], [customerEmail], [customerPhone], [customerAddress], [amount], [message], [created], [updated], [status], [note], [isCanceled]) VALUES (1, 4, N'Đoan', N'doan675895@gmail.com', N'0912345342', N'Tân Lập', CAST(1100000 AS Decimal(15, 0)), N'182 Tân Lập nha em', CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1, NULL, 0)
INSERT [dbo].[Transaction] ([id], [userID], [customerName], [customerEmail], [customerPhone], [customerAddress], [amount], [message], [created], [updated], [status], [note], [isCanceled]) VALUES (2, 4, N'Đoan', N'doan675895@gmail.com', N'0912345342', N'Tân Lập', CAST(522000 AS Decimal(15, 0)), N'182 Tân Lập nha em', CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 0, NULL, 0)
INSERT [dbo].[Transaction] ([id], [userID], [customerName], [customerEmail], [customerPhone], [customerAddress], [amount], [message], [created], [updated], [status], [note], [isCanceled]) VALUES (3, 5, N'Cường', N'cuong675895@gmail.com', N'0912345342', N'TPHCM', CAST(330000 AS Decimal(15, 0)), N'Tân Bình nha em', CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 0, NULL, 0)
INSERT [dbo].[Transaction] ([id], [userID], [customerName], [customerEmail], [customerPhone], [customerAddress], [amount], [message], [created], [updated], [status], [note], [isCanceled]) VALUES (4, 6, N'Đại', N'dai@gmail.com', N'0912345342', N'Dak Lak', CAST(4000000 AS Decimal(15, 0)), N'Buôn Hồ nha em', CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1, NULL, 0)
INSERT [dbo].[Transaction] ([id], [userID], [customerName], [customerEmail], [customerPhone], [customerAddress], [amount], [message], [created], [updated], [status], [note], [isCanceled]) VALUES (5, 7, N'Đoan Nguyễn', N'doannguyen@gmail.com', N'0911711901', N'Lâm Đồng', CAST(379500 AS Decimal(15, 0)), N'nhà anh nha em', CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 1, NULL, 0)
SET IDENTITY_INSERT [dbo].[Transaction] OFF
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([id], [name], [email], [phone], [address], [password], [created], [updated], [isDeleted], [idRole]) VALUES (2, N'flowerSHOP_WS', N'hdvflowershop@gmail.com', N'0987654321', N'97 Man Thiện', N'123', CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 0, 1)
INSERT [dbo].[User] ([id], [name], [email], [phone], [address], [password], [created], [updated], [isDeleted], [idRole]) VALUES (3, N'Nguyễn Trung Kiên', N'trungkientk2202@gmail.com', N'0866470644', N'Lâm Đồng', N'123', CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 0, 2)
INSERT [dbo].[User] ([id], [name], [email], [phone], [address], [password], [created], [updated], [isDeleted], [idRole]) VALUES (4, N'Nguyễn Trung Kiên', N'thanbanggia05@gmail.com', N'0911711902', N'Lâm Đồng', N'123', CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 0, 3)
INSERT [dbo].[User] ([id], [name], [email], [phone], [address], [password], [created], [updated], [isDeleted], [idRole]) VALUES (5, N'Ngô Mạnh Cường', N'n18dccn020@student.ptithcm.edu.vn', N'0911711903', N'TP.HCM', N'123', CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 0, 3)
INSERT [dbo].[User] ([id], [name], [email], [phone], [address], [password], [created], [updated], [isDeleted], [idRole]) VALUES (6, N'Lương Ngọc Đại', N'n18dccn035@student.ptithcm.edu.vn', N'0911711904', N'Đắk Lắk', N'123', CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 0, 3)
INSERT [dbo].[User] ([id], [name], [email], [phone], [address], [password], [created], [updated], [isDeleted], [idRole]) VALUES (7, N'Đoan Nguyễn', N'n18dccn044@student.ptithcm.edu.vn', N'0911711905', N'Lâm Đồng', N'123', CAST(N'2022-01-27 00:00:00.000' AS DateTime), NULL, 0, 3)
INSERT [dbo].[User] ([id], [name], [email], [phone], [address], [password], [created], [updated], [isDeleted], [idRole]) VALUES (8, N'1', N'1', N'1', N'1', N'1', CAST(N'2022-02-15 22:11:03.213' AS DateTime), NULL, 0, 1)
INSERT [dbo].[User] ([id], [name], [email], [phone], [address], [password], [created], [updated], [isDeleted], [idRole]) VALUES (9, N'kien', N'kien123@gmail.com', N'0345987615', N'doan123@gmail.com', N'1234', CAST(N'2022-02-15 22:59:30.990' AS DateTime), NULL, 0, 2)
SET IDENTITY_INSERT [dbo].[User] OFF
SET ANSI_PADDING ON

GO
/****** Object:  Index [User_UK_phone]    Script Date: 21/05/2022 10:32:06 ******/
ALTER TABLE [dbo].[User] ADD  CONSTRAINT [User_UK_phone] UNIQUE NONCLUSTERED 
(
	[phone] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [User_UN_Email]    Script Date: 21/05/2022 10:32:06 ******/
ALTER TABLE [dbo].[User] ADD  CONSTRAINT [User_UN_Email] UNIQUE NONCLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[flower_Category]  WITH CHECK ADD  CONSTRAINT [FK_flower_Category_Category] FOREIGN KEY([idCategory])
REFERENCES [dbo].[Category] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[flower_Category] CHECK CONSTRAINT [FK_flower_Category_Category]
GO
ALTER TABLE [dbo].[flower_Category]  WITH CHECK ADD  CONSTRAINT [FK_flower_Category_flower] FOREIGN KEY([idflower])
REFERENCES [dbo].[flower] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[flower_Category] CHECK CONSTRAINT [FK_flower_Category_flower]
GO
ALTER TABLE [dbo].[flower_Color]  WITH CHECK ADD  CONSTRAINT [FK_flower_Color_Color] FOREIGN KEY([idColor])
REFERENCES [dbo].[Color] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[flower_Color] CHECK CONSTRAINT [FK_flower_Color_Color]
GO
ALTER TABLE [dbo].[flower_Color]  WITH CHECK ADD  CONSTRAINT [FK_flower_Color_flower] FOREIGN KEY([idflower])
REFERENCES [dbo].[flower] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[flower_Color] CHECK CONSTRAINT [FK_flower_Color_flower]
GO
ALTER TABLE [dbo].[Image]  WITH CHECK ADD  CONSTRAINT [FK_Image_flower] FOREIGN KEY([idflower])
REFERENCES [dbo].[flower] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Image] CHECK CONSTRAINT [FK_Image_flower]
GO
ALTER TABLE [dbo].[Order]  WITH CHECK ADD  CONSTRAINT [FK_Order_flower] FOREIGN KEY([idflower])
REFERENCES [dbo].[flower] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Order] CHECK CONSTRAINT [FK_Order_flower]
GO
ALTER TABLE [dbo].[Order]  WITH CHECK ADD  CONSTRAINT [FK_Order_Transaction] FOREIGN KEY([transactionID])
REFERENCES [dbo].[Transaction] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Order] CHECK CONSTRAINT [FK_Order_Transaction]
GO
ALTER TABLE [dbo].[ShopCart]  WITH CHECK ADD  CONSTRAINT [FK_ShopCart_flower] FOREIGN KEY([idflower])
REFERENCES [dbo].[flower] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[ShopCart] CHECK CONSTRAINT [FK_ShopCart_flower]
GO
ALTER TABLE [dbo].[ShopCart]  WITH CHECK ADD  CONSTRAINT [FK_ShopCart_User] FOREIGN KEY([userID])
REFERENCES [dbo].[User] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[ShopCart] CHECK CONSTRAINT [FK_ShopCart_User]
GO
ALTER TABLE [dbo].[Transaction]  WITH CHECK ADD  CONSTRAINT [FK_Transaction_User] FOREIGN KEY([userID])
REFERENCES [dbo].[User] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Transaction] CHECK CONSTRAINT [FK_Transaction_User]
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Role] FOREIGN KEY([idRole])
REFERENCES [dbo].[Role] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Role]
GO
USE [master]
GO
ALTER DATABASE [flowerSHOP_HDV] SET  READ_WRITE 
GO
