import { useState } from "react";
import { FiShare2, FiCopy } from "react-icons/fi";
import {
    AiOutlineInstagram,
    AiOutlineFacebook,
    AiOutlineTwitter,
} from "react-icons/ai";

const SocialMediaContent = ({ socialMediaContent }) => {
    const [copiedText, setCopiedText] = useState("");

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopiedText(type);
        setTimeout(() => setCopiedText(""), 2000);
    };

    const shareToSocialMedia = (platform, text) => {
        const encodedText = encodeURIComponent(text);
        const urls = {
            instagram: `https://www.instagram.com/`, // Instagram doğrudan paylaşım desteklemiyor
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=${encodedText}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
        };

        if (platform === "instagram") {
            copyToClipboard(text, "instagram");
            alert(
                "Instagram metni panoya kopyalandı! Instagram uygulamasında paylaşabilirsiniz."
            );
        } else {
            window.open(urls[platform], "_blank", "width=600,height=400");
        }
    };

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <FiShare2 className="mr-2 text-indigo-500" />
                Sosyal Medya İçerikleri
            </h3>

            {/* Instagram */}
            <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-pink-400 flex items-center">
                        <AiOutlineInstagram className="mr-2" />
                        Instagram
                    </h4>
                    <div className="flex space-x-2">
                        <button
                            onClick={() =>
                                copyToClipboard(
                                    socialMediaContent.instagram_post,
                                    "instagram"
                                )
                            }
                            className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center"
                        >
                            <FiCopy className="mr-1" />
                            {copiedText === "instagram"
                                ? "Kopyalandı!"
                                : "Kopyala"}
                        </button>
                        <button
                            onClick={() =>
                                shareToSocialMedia(
                                    "instagram",
                                    socialMediaContent.instagram_post
                                )
                            }
                            className="text-xs bg-pink-600 hover:bg-pink-700 text-white px-2 py-1 rounded"
                        >
                            Paylaş
                        </button>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-3 rounded-lg border border-pink-500/20">
                    <p className="text-sm text-gray-300 whitespace-pre-line">
                        {socialMediaContent.instagram_post}
                    </p>
                </div>
            </div>

            {/* Facebook */}
            <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-blue-400 flex items-center">
                        <AiOutlineFacebook className="mr-2" />
                        Facebook
                    </h4>
                    <div className="flex space-x-2">
                        <button
                            onClick={() =>
                                copyToClipboard(
                                    socialMediaContent.facebook_post,
                                    "facebook"
                                )
                            }
                            className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center"
                        >
                            <FiCopy className="mr-1" />
                            {copiedText === "facebook"
                                ? "Kopyalandı!"
                                : "Kopyala"}
                        </button>
                        <button
                            onClick={() =>
                                shareToSocialMedia(
                                    "facebook",
                                    socialMediaContent.facebook_post
                                )
                            }
                            className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded"
                        >
                            Paylaş
                        </button>
                    </div>
                </div>
                <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                    <p className="text-sm text-gray-300">
                        {socialMediaContent.facebook_post}
                    </p>
                </div>
            </div>

            {/* Twitter */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sky-400 flex items-center">
                        <AiOutlineTwitter className="mr-2" />
                        Twitter/X
                    </h4>
                    <div className="flex space-x-2">
                        <button
                            onClick={() =>
                                copyToClipboard(
                                    socialMediaContent.twitter_post,
                                    "twitter"
                                )
                            }
                            className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center"
                        >
                            <FiCopy className="mr-1" />
                            {copiedText === "twitter"
                                ? "Kopyalandı!"
                                : "Kopyala"}
                        </button>
                        <button
                            onClick={() =>
                                shareToSocialMedia(
                                    "twitter",
                                    socialMediaContent.twitter_post
                                )
                            }
                            className="text-xs bg-sky-600 hover:bg-sky-700 text-white px-2 py-1 rounded"
                        >
                            Paylaş
                        </button>
                    </div>
                </div>
                <div className="bg-sky-500/10 p-3 rounded-lg border border-sky-500/20">
                    <p className="text-sm text-gray-300">
                        {socialMediaContent.twitter_post}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaContent;
